import express from 'express';
import pgk from 'pg';
const router = express.Router();
import bcrypt from 'bcrypt';
import axios from 'axios';
const { Pool } = pgk;
const SALT_ROUNDS = 10;


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

const usernameAvalability = async (username) => {
    const client = await pool.connect();
    try{
        const query = "SELECT * FROM users WHERE username = $1";
        const response = await client.query(query, [username]);
        return response.rows.length === 0 ? true : false;
    }   
    catch(error){
        console.log("Error while checking username avalibility: ", error);
    }
    finally {
        client.release();
    }
};

const emailAvalability = async (email) => {
    const client = await pool.connect();
    try{
        const query = "SELECT * FROM users WHERE email = $1";
        const response = await client.query(query, [email]);
        return response.rows.length === 0 ? true : false;
    }   
    catch(error){
        console.log("Error while checking email avalibility: ", error);
    }
    finally {
        client.release();
    }
};


router.post("/register", async (req, res) =>{
    const client = await pool.connect();
    console.log("Connected to database sucessfully");
    try{
        const request = req.query;
        if(await usernameAvalability(request.username) && await emailAvalability(request.email)){
            const hashedPassword = await bcrypt.hash(request.password, SALT_ROUNDS);
            const query = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
            const response = await client.query(query, [request.username, request.email, hashedPassword]);
            res.status(200).json({registration_code: 1});
            console.log("User has been added");
        }
        else{
            if(!await usernameAvalability(request.username)){
                res.status(200).json({registration_code: 2, message: "Username is already taken"});
            }
            if(!await emailAvalability(request.email)){
                res.status(200).json({registration_code: 3, message: "Email is already taken"});
            }
        }
    }
    catch (error) {
        console.log("Error while registering user", error);
    }
    finally{
        client.release();
    }
});

router.get("/getUserByEmailAndPassword", async (req, res)=>{
    const client = await pool.connect();
    console.log("Connected to database sucessfully");
    try{
        const request = req.query;
        const hashedPassword = await bcrypt.hash(request.password, SALT_ROUNDS);
        console.log(hashedPassword);
        const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
        const response = await client.query(query, [request.email, hashedPassword]);
        const data = response.rows[0];
        if(response.rows.length != 0){
            res.status(200).json({user: data, message: "Retrieved user"});
            console.log(`Retrieved user(${data}) from database`);
        }
        else {
            res.status(200).json({message: "This user does not exist"});
            console.log(`User does not exist`);
        }
    }
    catch(error) {
        console.log(`Error trying to retrive user: ${error}`);
        res.status(500).json({user: [], message: "Failed to retrieve user"});
    }
});

export default router;
