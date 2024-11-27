import React from 'react'
import { useSelector } from 'react-redux'
import BB from '../hooks/BB';
import BuyerDone from '../Components/BuyerDone';

function BuyerBookings() {
    BB()
    const allbookings = useSelector((d) => d.buyer.buyerBookings);

    console.log(allbookings)

  return (
    <div className='w-full  text-white'>
        <div className='w-full relative'>
        <h1 className='text-[26px] top-10 absolute left-1/2  -translate-x-1/2 font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'>My Bookings</h1>
        </div>

        <div className='pt-[150px]'>
            {
                allbookings ? <div className='w-full grid grid-cols-4 gap-4'>
                    {
                        allbookings.map((e,i) => {
                            return <div key={i} className='border border-white/[0.5] p-3 rounded-xl'>
                                <div className='flex items-center gap-4'>
                                <img className='w-[70px] h-[70px] rounded-full object-cover' src={e.bpost.avatar} alt="" />
                                <div>
                                <h2 className='text-[18px] font-bold italic'>{e.bpost.fullname}</h2>
                                <h2 className='italic'>Contact: {e.bpost.pnumber}</h2>
                                </div>
                                </div>

                                <div className='bg-gradient-to-tr from-[#77A1D3] via-[#79CBCA] to-[#E684AE] mt-2 p-3 rounded-xl text-black font-semibold'>
                                    <h2>Date: {e.fdate}</h2>
                                    <h2>When: {e.when}</h2>
                                    <h2>Hours: {e.hours}</h2>
                                    <h2>Total Rate: {e.totalrate} tk</h2>
                                </div>

                                {
                                    e.sellerapprove ? e.buyerdone ? <p className='w-full text-center font-bold bg-green-400 p-[6px_12px] rounded-md text-black mt-2'>
                                    Completed 🥰
                           </p> : <BuyerDone id={e._id} postId={e.bpost._id} />
                                    : 
                                    <p className={`w-full rounded-lg ${e.sellerdecline ? 'bg-red-400 text-black' : 'bg-white text-black'} text-center  font-semibold p-[6px_12px] mt-2`}>
                                        {
                                            e.sellerdecline ? 'Rejected' : 'Pending'
                                        }
                                    </p>
                                }
                            </div>
                        })
                    }
                </div> : <div>
                    <h2 className='text-[18px] text-red-500 capitalize italic font-bold'>No Bookings Found</h2>

                </div>
            }
        </div>



    </div>
  )
}

export default BuyerBookings