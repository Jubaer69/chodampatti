import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePost() {
    const [data, setData] = useState({
        avatar: '',
        fullname: '',
        age: '',
        rph: '',
        pnumber: ''
    })

    const nav = useNavigate()

    function handlepost(e){
        e.preventDefault()

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v4/seller/createpost`, data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        .then((d) => {
            if(d.data.success){

                alert(d.data.message)
                nav('/seller/profile')
            }
            else{
                alert(d.data.message)
            }
        })
        .catch((err) => alert(err))
    }

   

  return (
    <div className='w-full h-[80vh] text-white flex items-center justify-center'>
       <div className='flex items-center gap-6 flex-col'>
       <h1 className='text-[28px] inline-block  text-transparent  bg-clip-text bg-gradient-to-tl from-violet-400 to-red-500 font-bold'>Create A Post</h1>

<form onSubmit={handlepost} className='flex flex-col gap-3'>
    <input
        className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
    type="text" placeholder='Full Name' value={data.fullname} onChange={(e) => setData(p => ({...p, fullname: e.target.value}))} />

    <input
        className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
    type="text" placeholder='Avatar' value={data.avatar} onChange={(e) => setData(p => ({...p, avatar: e.target.value}))} />

    <input
        className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
    type="text" placeholder='Age' value={data.age} onChange={(e) => setData(p => ({...p, age: e.target.value}))} />

    <input
        className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
    type="text" placeholder='Rate Per Hour' value={data.rph} onChange={(e) => setData(p => ({...p, rph: e.target.value}))} />

    <input
        className='w-[300px] bg-transparent border border-white/[0.5] p-[6px] rounded-md'
    type="text" placeholder='Phone Number' value={data.pnumber} onChange={(e) => setData(p => ({...p, pnumber: e.target.value}))} />

    <input 
        className='w-[300px] p-[6px] rounded-md inline-block text-white font-bold bg-gradient-to-tl from-violet-400 to-red-500'
    type="submit" value={'Submit'} />

</form>

       </div>


    </div>
  )
}

export default CreatePost