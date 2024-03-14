import express from 'express';
import pkg from 'pg';
const router = express.Router();

router.get("/helloWorld", (req, res)=>{
    res.send("Hello world");
});

export default router;