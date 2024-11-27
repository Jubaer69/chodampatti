import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [buyer, setBuyer] = useState({
    fullname: '',
    avatar: '',
    email: '',
    password: ''
  });

  const [seller, setSeller] = useState({
    fullname: '',
    avatar: '',
    email: '',
    password: ''
  })

  const nav = useNavigate()


  function sellerreg(e){
      e.preventDefault()

      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/seller/sellerregister`, seller, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      .then((d) => {

        if(d.data.success){
          alert(d.data.message)
          nav('/login')
        }
        else{
          alert(d.data.message)
        }
        
        
      })
      .catch((err) => alert(err))
  }

  function buyerreg(e){
    e.preventDefault()

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/buyer/buyerregister`, buyer, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    })
    .then((d) => {

      if(d.data.success){
        alert(d.data.message)
        nav('/login')
      }
      else{
        alert(d.data.message)
      }
      
      
    })
    .catch((err) => alert(err))


  }

  return (
    <div className='w-full  text-white'>
        <div className='flex items-center justify-evenly w-full mt-[150px]'>
        <div className='seller flex flex-col items-center'>
          <h2 className='text-[28px] inline-block  text-transparent  bg-clip-text bg-gradient-to-tl from-violet-400 to-red-500 font-bold text-center'>Seller Registration</h2>
          <form onSubmit={sellerreg} className='flex flex-col gap-3 mt-4'>
              <input type="text"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Full Name' value={seller.fullname} onChange={(e) => setSeller(p => ({...p, fullname: e.target.value}))} />
              <input type="email"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Email' value={seller.email} onChange={(e) => setSeller(p => ({...p, email: e.target.value}))} />
              <input type="password"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Password' value={seller.password} onChange={(e) => setSeller(p => ({...p, password: e.target.value}))} />
              <input type="text"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Avatar Url' value={seller.avatar} onChange={(e) => setSeller(p => ({...p, avatar: e.target.value}))} />
              <input type="submit" value={'Submit'} 
                className='w-[300px] bg-white text-black p-[6px] rounded-md'
              />
          </form>
      </div>


      <div className='buyer flex flex-col items-center relative  before:content-[""] before:absolute before:left-[-30%] before:w-[1px] before:h-full before:bg-white/[0.5]'>
      <h2 className='text-[28px] inline-block  text-transparent  bg-clip-text bg-gradient-to-tl from-green-400 to-orange-500 font-bold text-center'>Buyer Registration</h2>
          <form onSubmit={buyerreg} className='flex flex-col gap-3 mt-4'>
              <input type="text"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Full Name' value={buyer.fullname} onChange={(e) => setBuyer(p => ({...p, fullname: e.target.value}))} />
              <input type="email"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Email' value={buyer.email} onChange={(e) => setBuyer(p => ({...p, email: e.target.value}))} />
              <input type="password"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Password' value={buyer.password} onChange={(e) => setBuyer(p => ({...p, password: e.target.value}))} />
              <input type="text"
                className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
              placeholder='Avatar Url' value={buyer.avatar} onChange={(e) => setBuyer(p => ({...p, avatar: e.target.value}))} />
              <input type="submit" value={'Submit'} 
                className='w-[300px] bg-white text-black p-[6px] rounded-md'
              />
          </form>
      </div>
        </div>

    </div>
  )
}

export default Registration