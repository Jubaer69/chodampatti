import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const isSeller = useSelector((d) => d.seller.isSeller)
    const isBuyer = useSelector((d) => d.buyer.isBuyer)

    console.log(import.meta.env.VITE_BACKEND_URL)

    if(isSeller){
        return  <header className='w-full flex items-center justify-between text-white'>
            <h2 className='text-[20px] font-bold'>Chodampatti</h2>
            <div className="nav flex items-center gap-8">
                <Link to={'/'}>Home</Link>
                <Link to={'/seller/bookings'}>Bookings</Link>
                <Link to={'/seller/profile'}>Profile</Link>
            </div>
        </header>
    }
    else if(isBuyer){
       return <header className='w-full flex items-center justify-between text-white'>
            <h2 className='text-[20px] font-bold'>Chodampatti</h2>
            <div className="nav flex items-center gap-8">
                <Link to={'/buyer/browse'}>Browse</Link>
                <Link to={'/buyer/bookings'}>My Bookings</Link>
                <Link to={'/buyer/profile'}>Profile</Link>
            </div>
        </header>
    }
    else{
        return <header className='w-full flex items-center justify-between text-white'>
            <h2 className='text-[20px] font-bold'>Chodampatti</h2>
            <div className="nav flex items-center gap-8">
                <Link to={'/'}>Home</Link>
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        </header>
    }
  
}

export default Header