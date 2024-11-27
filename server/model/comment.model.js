import mongoose from "mongoose"

const commSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    commenter: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'buyer'
        }
    

},{timestamps: true})

const Cda =  mongoose.model('comment', commSchema);
export default Cda