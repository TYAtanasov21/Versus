import express, { request } from 'express';
import pgk from 'pg';
const router = express.Router();
import axios from 'axios';

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


router.post("/checkMessage", async (req, res) => {
    const message = req.body.message;
    const requestBody = {
        "input_data": {
          "columns": [
            "tweet_text",
            "Column3",
            "Column4",
            "Column5",
            "Column6"
          ],
          "index": [0],
          "data": [[message, 0.1, 0.2, 0.3, 0.4]]
        }
      };

    const apiKey = "WQBhA0g8AxLv9wGJkLPsAyVdlMTOZXDd";
    if (!apiKey) {
        throw new Error("A key should be provided to invoke the endpoint");
    }

    const requestHeaders = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
        "azureml-model-deployment": "willingdoublevy45-1"
    };

    try {
        const response = await axios.post("https://versus-new-ndqbm.westeurope.inference.ml.azure.com/score", requestBody, {
            headers: requestHeaders
        });
        console.log(message);
        if(response.data!="not_cyberbullying"){
            res.status(200).json({isBullying: true, response: response.data});
        }
        else{
            res.status(200).json({isBullying: false});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
