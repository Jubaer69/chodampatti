import React from 'react'
import { useSelector } from 'react-redux'

function BuyerProfile() {
    const buyer = useSelector((d) => d.buyer.isBuyer)
  return (
    <div className='w-full h-full text-white'>
        {
            buyer ?   <div >
                <div className='flex items-center gap-5 mt-10'>
            <img className='w-[100px] h-[100px] rounded-full object-cover' src={buyer.avatar} alt="" />
            <div>
                <h2 className='text-[24px] font-bold italic capitalize'>{buyer.fullname}</h2>
                <h2 className='text-[18px] italic'>{buyer.email}</h2>
            </div>
        </div> 

            </div>

        : 'no buyer found'
        }
    </div>
  )
}

export default BuyerProfile