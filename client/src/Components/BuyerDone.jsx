import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBuyerBookings } from '../toolkit/reducers/BuyerSlice';
import { useNavigate } from 'react-router-dom';

function BuyerDone({id, postId}) {

    const dispatch = useDispatch();
    const bookreq = useSelector((d) => d.buyer.buyerBookings);
    const nav = useNavigate()

    function handledone(){
        axios.post('http://localhost:3000/api/v4/buyer/workdone', {bookId: id})
        .then((d) => {
            if(d.data.success){
                let gg = bookreq && [...bookreq];
                gg = gg.map(v => v._id === id ? {...v, buyerdone: true} : v);
                dispatch(setBuyerBookings(gg))
                nav(`/buyer/comment/${postId}`)
            }
        })
        .catch((err) => console.log(err))
    }

  return <button onClick={() => handledone()} className='w-full font-bold bg-cyan-400 p-[6px_12px] rounded-md text-black mt-2'>
                Work Done
        </button>
}

export default BuyerDone