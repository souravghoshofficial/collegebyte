import { Router } from "express";
import bcrypt from "bcrypt";

import { db } from "../db/index.js";

const router = Router();

router.post("/signup", async (req, res) => {
    const { name, roll, email, password } = req.body;
  
    if (!name || !roll || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // SQL query
      const sql = "INSERT INTO users (name, roll, email, password) VALUES ($1, $2, $3, $4)";
  
      await db.query(sql, [name, roll, email, hashedPassword]);
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      if (err.code === "23505") {
        // Unique constraint violation
        return res.status(409).json({ message: "Email already exists" });
      }
      console.error("Database error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  export default router;