import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/studentRoute.js'
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB()

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Node.js REST API is Running."
    })
})

app.use(express.json());

app.use("/api/students", router)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server Start : http://localhost:${PORT}`);
})
