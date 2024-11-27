import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buyer'
    },
    bpost: {
    
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
        
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller'
    },
    hours: Number,
    totalrate: Number,
    fdate: String,
    when: String,
    sellerapprove: {
        type: Boolean,
        default: false
    },
    sellerdecline: {
        
            type: Boolean,
            default: false
        
    },
    buyerdone: {
        type: Boolean,
        default: false
    },
    sellerdone: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})


export const Booking = mongoose.model('booking', bookingSchema)