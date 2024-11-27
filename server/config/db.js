import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()



const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
         console.log('mongodb connected')
     } catch (error) {
         console.log(error)
     }
}

export default connect