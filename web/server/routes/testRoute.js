import express from 'express';
import pgk from 'pg';
const router = express.Router();

const { Pool } = pgk;

const pool = new Pool({
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    user: 'postgres.kacyodmycmfassvbecqb',
    password: 'VersusAI_2024',
    database: 'postgres',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const test = async () => {
    try {
        const client = await pool.connect(); 
        console.log("Connected to database!");
        console.log(await client.query("SELECT * FROM users"));
        
        client.release(); 
    } catch (error) {
        console.log("Error connecting to database:", error); 
    }
};

router.get("/helloWorld", (req, res) => {
    test();
    res.send("Testing database connection..."); 
});

export default router;
