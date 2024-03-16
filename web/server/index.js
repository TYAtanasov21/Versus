import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pgk from "pg";
import { TextAnalyticsClient, AzureKeyCredential } from '@azure/ai-text-analytics';
import userRoute from "./routes/userRoute.js";

    
const {Pool} = pgk;


const pool = new Pool({
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    user: 'postgres.kacyodmycmfassvbecqb',
    password: 'VersusAI_2024',
    database: 'postgres',
    port: 5432,
    ssl: true,
});



const app = express();
const PORT = process.env.PORT || 3001;
const endpoint = 'https://versusai6276601461.openai.azure.com/';
const apiKey = '9ba8d4a324444afe8948e4508d4a063a';
const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoute);


app.post('/analyzeText', async (req, res) => {
    const { text } = req.body;
    
    try {
        const sentimentAnalysis = await textAnalyticsClient.analyzeSentiment([text]);
        res.json(sentimentAnalysis);
    } catch (error) {
        console.error('Error analyzing text:', error);
        res.status(500).json({ error: 'An error occurred while analyzing text' });
    }
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});