import React from 'react'
import { useSelector } from 'react-redux'
import getAllSellerPosts from '../hooks/getAllSellerPosts'
import { Link } from 'react-router-dom'

function SellerProfile() {
    const isSeller = useSelector((d) => d.seller.isSeller)
    getAllSellerPosts()
    const sellerPosts = useSelector((d) => d.seller.sellerAllPosts)
    
  return (
    <div className='w-full h-full text-white'>
        {isSeller ? <div className=''>
            <div className='flex items-center gap-5 mt-10 mb-5'>
            <img className='w-[100px] h-[100px] object-cover rounded-full' src={isSeller.avatar} alt="" />
            <div>
            <h2 className='text-[24px] capitalize italic font-bold'>{isSeller.fullname}</h2>
            <h2 className='text-[18px]  italic '>{isSeller.email}</h2>
            </div>
            </div>
            <Link to={'/seller/createpost'} className='p-[8px_16px]  font-medium bg-gradient-to-tr from-cyan-300 to-slate-50 rounded-full text-black '>Create Post</Link>

            <div>
            <h2 className='text-center translate-x-[520px]  mt-10 text-[26px] inline-block  font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#BA5370] to-[#F4E2D8]'>My Posts</h2>
            </div>

            {sellerPosts?.length > 0 ? <div className='w-full grid grid-cols-4 gap-4  mt-14'>
              {sellerPosts?.map((e,i) => {
                return <Link to={`/seller/postview/${e._id}`} className='w-full bg-slate-950 p-3 rounded-lg transition hover:bg-gradient-to-tr from-[#BA5370] to-[#F4E2D8] hover:text-black'>
                  <img className='w-full max-h-[260px] rounded-lg object-cover ' src={e.avatar} alt="" />
                  <div>
                    <h2 className='text-[20px] mt-2 font-bold capitalize'>{e.fullname}</h2>
                    {/* <h2>{e.age}</h2> */}
                  </div>
                </Link>
              })}
            </div>: 'nai'}
        </div>: 'null'}
    </div>
  )
}

export default SellerProfile