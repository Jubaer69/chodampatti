import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BrowsePost from '../hooks/BrowsePost'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Browse() {

    BrowsePost()
    const data = useSelector((d) => d.buyer.allPosts)


  return (
    <div className='w-full h-full text-white'>
        <h1 className='text-center translate-x-[490px] mt-10 text-[26px] inline-block  font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#BA5370] to-[#F4E2D8]'>Browse Posts</h1>
        {data.length > 0 ? <div className='w-full grid grid-cols-4 gap-4 mt-10 '>
            {data.map((e,i) => (
            <Link to={`/buyer/browse/${e._id}`} key={i} className='w-full bg-slate-950 p-3 rounded-lg transition hover:bg-gradient-to-tr from-[#BA5370] to-[#F4E2D8] hover:text-black'>
                <img className='w-full rounded-md max-h-[260px] object-cover' src={e.avatar} alt="" />
                <p className=' mt-3 capitalize'>Full name: <span className='font-bold italic'>{e.fullname}</span></p>
                <p>RPH: <span className='font-bold italic'>{e.rph} tk</span></p>
            </Link>
            
        ))}

        </div>
        : <div>
            no posts found
        </div>
    }
        
    </div>
  )
}

export default Browse