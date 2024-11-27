import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BB from '../hooks/BB';

function BuyerComment() {
    const {id} = useParams()
    BB()
    const bookings = useSelector((d) => d.buyer.buyerBookings);
    const isBuyer = useSelector((d) => d.buyer.isBuyer);
    const [num, setnum] = useState(1)
    const [comm, setComm] = useState('')
    const array = [1,2,3,4,5];
    const check = bookings?.find(val => val.bpost._id === id);
    const gc = check.bpost.buyers.includes(isBuyer._id);

    console.log(gc)




    function handlecomment(){
        if(comm === ''){
            alert('comment required')
        }
        else{
            if(check){
                axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/buyer/buyercomment`, {comment: comm, rating: num, postid: id}, {withCredentials: true})
                .then((d) => {
                    if(d.data.success){
                        alert(d.data.message)
                    }
                })
                .catch((err) => console.log(err))
            }
            else{
                alert('you cant comment yet the sellers done with you')
            }


        }
    }

  return (
    <div className='w-full text-white'>
         <div className='w-full relative'>
        <h1 className='text-[26px] top-10 absolute left-1/2  -translate-x-1/2 font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'>Leave A Review</h1>
        </div>

        <div className='pt-[150px] flex items-center flex-col gap-4'>
            <div className='flex items-center gap-3'>
                {
                    array.map((e,i) => {
                        return <div style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}} onMouseEnter={() => setnum(i+1)} className={`w-[40px] ${i+1 <= num ? 'bg-yellow-300' : 'bg-white/[0.5]'} h-[40px]  rounded-md`}></div>
                    })
                }

            </div>
            <input
                className='w-[400px] text-white px-3 py-2 border bg-transparent border-white/[0.5] rounded-full'
            type="text" placeholder='Leave a comment' value={comm} onChange={(e) => setComm(e.target.value)} />
            <button onClick={() => handlecomment()} className='p-[6px_12px] w-[300px] text-[18px] font-semibold text-black rounded-full bg-gradient-to-r from-[#FBD3E9] to-[#BB377D]'>Submit</button>
        </div>
    </div>
  )
}

export default BuyerComment