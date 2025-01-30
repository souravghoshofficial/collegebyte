import dotenv from "dotenv";
import express from "express"; 
import bcrypt from "bcrypt"; 
import {db , connectDB} from "./db/index.js"; 
import jwt from "jsonwebtoken"; 
import { app } from "./app.js";

import LoginRouter from "./routes/user.routes.js";

dotenv.config({ path: "./env" });


if (!process.env.SERVER_PORT || !process.env.JWT_SECRET) {
  throw new Error("Missing required environment variables (SERVER_PORT or JWT_SECRET)");
}

const port = process.env.SERVER_PORT || 3000;


app.use(express.json());

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("PostgreSQL connection failed", err);
  });

// User Signup

app.use("/" , LoginRouter);

// User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Fetch user by email
    const sql = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(sql, [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token valid for 1 hour
    });

    res.json({
      message: "Login successful",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
