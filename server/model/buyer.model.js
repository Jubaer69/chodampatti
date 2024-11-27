import mongoose from "mongoose"

const buyerSchema = new mongoose.Schema({
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
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ],
    booking: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking'
        }
    ]

}, {timestamps: true})

export const Buyer = mongoose.model('buyer', buyerSchema);