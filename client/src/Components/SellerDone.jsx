import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSellerBookReq } from '../toolkit/reducers/SellerSlice';
import { useNavigate } from 'react-router-dom';

function SellerDone({id, sellerId}) {

    const dispatch = useDispatch();
    const bookreq = useSelector((d) => d.seller.sellerBookReq);
    const nav = useNavigate()

    function handledone(){
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/seller/workdone`, {bookId: id})
        .then((d) => {  
            let gg = bookreq && [...bookreq];
            gg = gg.map(v => v._id === id ? {...v, sellerdone: true} : v);
            dispatch(setSellerBookReq(gg))
            nav(`/seller/comment/${sellerId}`)
        })
        .catch((err) => console.log(err))
    }

    return <button onClick={() => handledone()} className='w-full font-bold bg-cyan-400 p-[6px_12px] rounded-md text-black mt-2'>
                Work Done
        </button>
}

export default SellerDone