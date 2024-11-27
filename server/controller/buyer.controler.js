import { Buyer } from "../model/buyer.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Booking } from "../model/booking.model.js";
import { Seller } from "../model/seller.model.js";
import { Post } from "../model/post.model.js";
import Cda from "../model/comment.model.js";

dotenv.config()


export const buyerRegiser = async (req,res) => {
    try {
        const {email, fullname, avatar, password} = req.body;
        if(!email || !fullname || !avatar || !password) {
            res.send({
                success: false,
                message: 'All fields are required'
            })
        }
        else{
            const user = await Buyer.findOne({email});
            if(user) {
                res.send({
                    success: false,
                    message: 'this Email already exists'
                })
            }
            else{
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const nBuyer = await Buyer.create({
                    fullname,
                    email,
                     password: hash,
                     avatar
                })
                res.send({
                    success: true,
                    message: 'Buyer registered successfully',
                    buyer: nBuyer
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}




export const loginBuyer = async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            res.send({
                success: false,
                message: "All field must required"
            })
        }
        else{
            const buyer = await Buyer.findOne({email})

            if(buyer){
                const checkpassword = await bcrypt.compare(password, buyer.password);
              
                if(checkpassword){
                    const payload = {
                        userId: buyer._id
                    }
                    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2d'});
                    res.status(200).cookie('token', token, {httpOnly: true, sameSite: 'strict', maxAge: 1*24*60*60*1000}).send({
                        success: true,
                        message: "user logged in successfully",
                        user: buyer,
                        token: token
                    })
                }
                else{
                    res.send({
                        success: false,
                        message: "incorrect password"
                    })
                }
            }
            else{
                res.send({
                    success: false,
                    message: "User not found"
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const booking = async (req,res) => {
    try {
        const {fdate, when, totalrate, hours, sellerId, postId} = req.body;

        if(!fdate || !totalrate || !hours){
            res.send({
                success: false,
                message: "all fields required"
            })
        }
        else{
            const newBooking = await Booking.create({
                fdate,
                hours,
                totalrate,
                when,
                buyer: req.id,
                seller: sellerId,
                bpost: postId
            })

            const loggedBuyer = await Buyer.findById(req.id)
            loggedBuyer.booking.push(newBooking._id)
            const sellerx = await Seller.findById(sellerId)
            sellerx.bookreq.push(newBooking._id)
            await loggedBuyer.save()
            await sellerx.save()

            res.send({
                success: true,
                message: "booking created successfully",
                booking: newBooking
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const allposts = async (req,res) => {
    try {
        const allpost = await Post.find().sort({createdAt: -1}).populate({
            path: 'poster'
            
        }).populate({path: 'comments',
            populate: {path: 'commenter'}
        })
        res.send({
            success: true,
            message: "all posts",
            posts: allpost
        })
    } catch (error) {
        console.log(error)
    }
}


export const mybookings = async (req,res) => {
    try {
        const myallbookings = await Booking.find({buyer: req.id}).sort({createdAt: -1}).populate({path: 'bpost'})
        if(myallbookings){
            res.send({
                success: true,
                message: "all bookings",
                bookings: myallbookings
            })
        }
        else{
            res.send({
                success: false,
                message: "no bookings found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const workdone = async (req,res) => {
    try {
        const bookId = req.body.bookId;
        const fbook = await Booking.findById(bookId);
        
        if(fbook){
            fbook.buyerdone = true;
            await fbook.save();

            res.send({
                success: true,
                message: "work done successfully",
                done: fbook
            })


        }
        else{
            res.send({
                success: false,
                message: "booking not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const buyerComment = async (req,res) => {
    try {
        const {comment, rating, postid} = req.body;
        const fPost = await Post.findById(postid);

        if(fPost){
            const newComment = await Cda.create({
                comment,
                rating,
                commenter: req.id,
            })
            fPost.comments.push(newComment._id)
            await fPost.save();

            res.send({
                success: true,
                message: "comment created successfully",
                comment: newComment
            })
        }
        else{
            res.send({
                success: false,
                message: "post not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}
