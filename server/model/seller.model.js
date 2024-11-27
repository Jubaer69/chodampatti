import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ],
    bookreq: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking'
        }
    ]

},{timestamps: true})

export const Seller = mongoose.model('seller', sellerSchema);