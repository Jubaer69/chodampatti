import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()


export const isAuth = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            res.send({
                succss: false,
                message: 'token not found'
            })
        }
        else{
            var decoded = jwt.verify(token, process.env.JWT_SECRET)
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