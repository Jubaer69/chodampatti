import express from 'express';

import { accept, bookingreq, crPost, decline, getPosts, loginSeller, registerSeller, workdone } from '../controller/seller.controler.js';
import { sellerAuth } from '../middleware/sellerAuth.js';

const router = express.Router();


router.post('/sellerregister', registerSeller);
router.post('/sellerlogin', loginSeller)
router.post('/createpost', sellerAuth, crPost)
router.get('/getposts', sellerAuth, getPosts)
router.get('/bookingreq', sellerAuth, bookingreq)
router.post('/accept', accept)
router.post('/decline', decline)
router.post('/workdone', workdone)

export default router
