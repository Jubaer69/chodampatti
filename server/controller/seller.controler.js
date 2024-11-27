import { Buyer } from "../model/buyer.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Seller } from "../model/seller.model.js";
import { Post } from "../model/post.model.js";
import { Booking } from "../model/booking.model.js";

dotenv.config()


export const registerSeller = async (req,res) => {
    try {
        const {email, fullname, avatar, password} = req.body;
        if(!email || !fullname || !avatar || !password) {
            res.send({
                success: false,
                message: 'All fields are required'
            })
        }
        else{
            const user = await Seller.findOne({email});
            if(user) {
                res.send({
                    success: false,
                    message: 'this Email already exists'
                })
            }
            else{
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const nBuyer = await Seller.create({
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




export const loginSeller = async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            res.send({
                success: false,
                message: "All field must required"
            })
        }
        else{
            const buyer = await Seller.findOne({email}).populate('posts')

            if(buyer){
                const checkpassword = await bcrypt.compare(password, buyer.password);
              
                if(checkpassword){
                    const payload = {
                        userId: buyer._id
                    }
                    const token =  jwt.sign(payload, process.env.SELLER_JWT_SECRET, {expiresIn: '2d'});
                    res.status(200).cookie('tokens', token, {httpOnly: true, sameSite: 'strict', maxAge: 1*24*60*60*1000}).send({
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

export const crPost = async (req,res) => {
    try {
        const {avatar, fullname, age, pnumber, rph} = req.body;
        if(!avatar || !fullname || !age || !pnumber || !rph){
            res.send({
                success: false,
                message: "All field must required"
            })
        }
        else{
            const seller = await Seller.findById(req.id)
            if(seller){
                const newPost = await Post.create({
                    avatar,
                    fullname,
                    age,
                    pnumber,
                    rph,
                    poster: req.id
                })
                seller.posts.push(newPost._id)
                await seller.save()
                res.send({
                    success: true,
                    message: "post created successfully",
                    post: newPost
                })
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

// .populate({
//     path: 'comments',
//     populate: {
//         path: 'commenter',
//         select: ['fullname avatar']
      
//     }
// })

export const getPosts = async (req,res) => {
    try {
        const allposts = await Post.find({poster: req.id}).sort({createdAt: -1}).populate({
            path: 'buyers'
        }).populate({
            path: 'comments',
            populate: {
                path: 'commenter'
            }
        })
        res.send({
            success: true,
            message: "All posts fetched successfully",
            posts: allposts
        })
    } catch (error) {
        console.log(error)
    }
}

export const bookingreq = async (req,res) => {
    try {
        const allbookings = await Booking.find({seller: req.id}).sort({createdAt: -1}).populate({
            path: 'buyer',
            // populate: 'comments'
        }).populate({
            path: 'bpost'
        })
        if(allbookings){
            res.send({
                success: true,
                message: "All booking requests fetched successfully",
                bookings: allbookings
            })
        }
        else{
            res.send({
                success: false,
                message: "No booking requests found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const accept = async (req,res) => {
    try {
        const bookId = req.body.bookId;
        const fbook = await Booking.findById(bookId);
        if(fbook){
            fbook.sellerapprove = true;
            await fbook.save();
            res.send({
                success: true,
                message: "Booking request accepted successfully",
                accept: fbook
            })
        }
        else{
            res.send({
                success: false,
                message: "Booking request not found"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const decline = async (req,res) => {
    try {
        const bookId = req.body.bookId;
        const fbook = await Booking.findById(bookId);

        if(fbook){
            fbook.sellerdecline = true;
            await fbook.save();
            res.send({
                success: true,
                message: "Booking request accepted successfully",
                decline: fbook
            })
        }
        else{
            res.send({
                success: false,
                message: "Booking request not found"
            })
        }
    } catch (error) {
        conole.log(error)
    }
}


export const workdone = async (req,res) => {
    try {
        const bookId = req.body.bookId;
        const fbook = await Booking.findById(bookId)

        if(fbook){
            fbook.sellerdone = true;
            await fbook.save();
            const fpost = await Post.findById(fbook.bpost);
            fpost.buyers.push(fbook.buyer);
            await fpost.save();
            res.send({
                success: true,
                message: "Booking request accepted successfully",
                sellerdone: fbook
            })
        }
        else{
            res.send({
                success: false,
                message: "Booking request not found"
            })
        }
    } catch (error) {
        conole.log(error)
    }
}
