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

const getUser = async (client ,email, hashedPassword) =>{
    try{
    const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
    const response = await client.query(query, [email, hashedPassword]);
    return response.rows[0];
    }
    catch(error){
        console.log("Error getting user: ", error);
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
            const user = await getUser(client, request.email, hashedPassword);
            res.status(200).json({registration_code: 1, user: user});
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

router.get("/signIn", async (req, res)=>{
    const client = await pool.connect();
    console.log("Connected to database successfully");
    try{
        const request = req.query;
        const query = "SELECT * FROM users WHERE email = $1";
        const response = await client.query(query, [request.email]);
        const userData = response.rows[0];
        
        if (userData) {
            const isPasswordMatch = await bcrypt.compare(request.password, userData.password);
            if (isPasswordMatch) {
                res.status(200).json({ user: userData, message: "User authenticated successfully", successful: true });
                console.log(`User (${userData.username}) authenticated successfully`);
            } else {
                res.status(200).json({ message: "Incorrect password", successful: false});
                console.log("Incorrect password");
            }
        } else {
            res.status(200).json({ message: "User not found", successful: false });
            console.log("User not found");
        }
    } catch (error) {
        console.log(`Error trying to retrieve user: ${error}`);
        res.status(500).json({ user: [], message: "Failed to retrieve user", successful: false });
    } finally {
        client.release();
    }
});



export default router;
