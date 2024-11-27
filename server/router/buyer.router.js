import express from 'express';
import { allposts, booking, buyerComment, buyerRegiser, loginBuyer, mybookings, workdone } from '../controller/buyer.controler.js';
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();


router.post('/buyerregister', buyerRegiser)
router.post('/buyerLogin', loginBuyer)
router.post('/buyerbooking', isAuth, booking)
router.get('/mybookings', isAuth, mybookings)
router.post('/workdone', workdone)
router.post('/buyercomment', isAuth, buyerComment )
router.get('/allposts', allposts)

export default router
