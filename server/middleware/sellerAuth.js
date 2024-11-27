import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'


export const sellerAuth = async (req,res, next) => {
    try {
        const token = req.cookies.tokens;
        if(!token){
            res.send({
                succss: false,
                message: 'token not found'
            })
        }
        else{
            var decoded = jwt.verify(token, process.env.SELLER_JWT_SECRET)
            if(!decoded){
                res.send({
                    success: false,
                    message: 'token invalid'
                })
            }
            else{
                req.id = decoded.userId;
                next()
            }
        }
    } catch (error) {
        console.log(error)
    }
}