import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBuyerBookings } from '../toolkit/reducers/BuyerSlice';

function BB() {
    const isBuyer = useSelector((d) => d.buyer.isBuyer);

    const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v4/buyer/mybookings`, {withCredentials: true})
    .then((d) => {
        if(d.data.success){
            dispatch(setBuyerBookings(d.data.bookings))
            
        }
    })
  }, [isBuyer])
}

export default BB