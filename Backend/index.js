import dotenv from "dotenv";
import connectDB from './db/index.js';
import {app} from './app.js'

dotenv.config({path: './env'})

const port = process.env.SERVER_PORT || 3000

connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        
    })
})
.catch((err) => {
    console.log("PostgreSQL connection failed ", err);
    
})