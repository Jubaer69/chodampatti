import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    avatar: {
        type: String,
        required: true
    },
    age: Number,
    pnumber: String,
    fullname: String,
    rph: Number,
    poster: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller'
    },
    
    buyers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'buyer'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ]

}, {timestamps: true})

export const Post = mongoose.model('post', postSchema);