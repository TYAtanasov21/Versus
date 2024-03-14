import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pgk from "pg";

import testRoute from "./routes/testRoute.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", testRoute);


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});