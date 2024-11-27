import React from 'react'
import SellerBookReq from '../hooks/SellerBookReq'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setSellerBookReq } from '../toolkit/reducers/SellerSlice';
import SellerDone from '../Components/SellerDone';

function SellerBooking() {
  SellerBookReq()
  const bookreq = useSelector((d) => d.seller.sellerBookReq);
  const dispatch = useDispatch()

  console.log(bookreq)

  function handledecline(id){
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/seller/decline`, {bookId: id})
    .then((d) => {
      if(d.data.success){
          let gg = bookreq && [...bookreq];
          gg = gg.filter(v => v._id !== id);
          dispatch(setSellerBookReq(gg))
      }
    })
    .catch((err) => console.log(err))
  }

  function handleaccept(id){
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/seller/accept`, {bookId: id})
    .then((d) => {
      if(d.data.success){
        let gg = bookreq && [...bookreq];
        gg = gg.map(v => v._id === id ? {...v, sellerapprove: true} : v);
        dispatch(setSellerBookReq(gg))
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='w-full text-white'>
      <div className='w-full relative'>
        <h1 className='text-[26px] top-10 absolute left-1/2  -translate-x-1/2 font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'>My Bookings</h1>
        </div>
       
       <div className='pt-[150px]'>
       {
          bookreq.length > 0  ? <div className='w-full grid grid-cols-4 gap-4'>
              {
                bookreq.map((e,i) => {
                  return <div key={i} className='border border-white/[0.5] p-3 rounded-xl'>
                                <div className='flex items-center gap-4'>
                                <img className='w-[60px] h-[60px] rounded-full object-cover' src={e.buyer.avatar} alt="" />
                                <div>
                                <h2 className='text-[18px] font-bold italic capitalize'>{e.buyer.fullname}</h2>
                                {/* <h2 className='italic'>Contact: {e.bpost.pnumber}</h2> */}
                                </div>
                                </div>

                                <div className='bg-gradient-to-tr from-[#77A1D3] via-[#79CBCA] to-[#E684AE] mt-2 p-3 rounded-xl text-black font-semibold'>
                                    <div className='flex items-center gap-2'>
                                      <img className='w-[50px] h-[50px] object-cover rounded-full' src={e.bpost.avatar} alt="" />
                                      <p className='capitalize italic font-bold'>{e.bpost.fullname}</p>
                                    </div>
                                    <h2>Date: {e.fdate}</h2>
                                    <h2>When: {e.when}</h2>
                                    <h2>Duration: {e.hours} hrs</h2>
                                    <h2>Total Rate: {e.totalrate} tk</h2>
                                </div>

                                {
                                    e.sellerapprove ? 
                                      e.sellerdone ? <p className='w-full text-center font-bold bg-green-400 p-[6px_12px] rounded-md text-black mt-2'>
                                       Completed 🥰
                              </p> : <SellerDone id={e._id} sellerId={e.seller} />
                                    
                                    : 
                                    <div className='w-full flex items-center gap-3 text-black font-semibold mt-2'>
                                        <button onClick={() => handleaccept(e._id)} className='p-[6px_12px] w-full bg-green-400 font-semibold rounded-md'>Accept</button>
                                        <button onClick={() => handledecline(e._id)} className='p-[6px_12px] w-full bg-red-400 font-semibold rounded-md'>Decline</button>
                                    </div>
                                }
                            </div>
                })
              }
          </div>
          : 
          <div>No booking found</div>
        }
       </div>
    </div>
  )
}

export default SellerBooking