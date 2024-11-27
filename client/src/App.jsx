import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import Registration from './screens/Registration'
import Shona from './screens/Shona'
import Login from './screens/Login'
import SellerProfile from './screens/SellerProfile'
import CreatePost from './screens/CreatePost'
import BuyerProfile from './screens/BuyerProfile'
import Browse from './screens/Browse'
import Booking from './screens/Booking'
import BuyerBookings from './screens/BuyerBookings'
import SellerBooking from './screens/SellerBooking'
import SellerComments from './screens/SellerComments'
import BuyerComment from './screens/BuyerComment'
import BuyerMidd from './middleware/BuyerMidd'
import SellerPostView from './screens/SellerPostView'
import Bento from './screens/Bento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-black p-[20px_10%]'>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Shona />} >
                <Route index element={<Home />} />
                <Route path='/register' element={<Registration />} />
                <Route path='/login' element={<Login />} />
                <Route path='/seller/profile' element={<SellerProfile />} />
                <Route path='/seller/createpost' element={<CreatePost />} />
                <Route path='/seller/bookings' element={<SellerBooking />} />
                <Route path='/seller/comment/:id' element={<SellerComments />} />
                <Route path='/seller/postview/:id' element={<SellerPostView />} />
                
                <Route path='/buyer/profile' element={<BuyerProfile />} />
                <Route path='/buyer/browse' element={<Browse />} />
                <Route path='/buyer/browse/:id' element={<Booking />} />
                <Route path='/buyer/bookings' element={<BuyerBookings />} />
                <Route path='/buyer/comment/:id' element={<BuyerComment />} />

                <Route path='/bento' element={<Bento />} />
              
              </Route>
              
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
