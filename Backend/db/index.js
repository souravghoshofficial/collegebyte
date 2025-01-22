import dotenv from 'dotenv'
import pg from 'pg'
const { Client } = pg
dotenv.config()
const db = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})


const connectDB = async () => {
    try {
        await db.connect()
        console.log('PostgreSQL connected !!');
    } catch (error) {
        console.log("PostgreSQL connection FAILED" , error);
        process.exit(1)
    }
}

export default connectDB