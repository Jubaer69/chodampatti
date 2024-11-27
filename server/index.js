import express from "express";
import cors from "cors";
import connect from "./config/db.js";
import cookieParser from "cookie-parser";
import buyerRouter from './router/buyer.router.js'
import sellerRouter from './router/seller.router.js'


const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cookieParser())
const corsconfig= {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsconfig))

app.get('/', (req,res) => {
    res.send({
        message: "this is server"
    })
})

app.use('/api/v4/buyer', buyerRouter)
app.use('/api/v4/seller', sellerRouter)

const PORT = 3000;

app.listen(PORT, () => {
    connect()
    console.log(`Server running on port ${PORT}`)
})
