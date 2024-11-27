import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSellerBookReq } from '../toolkit/reducers/SellerSlice'

function SellerBookReq() {
    const dispatch = useDispatch()
    const isSeller = useSelector((d) => d.seller.isSeller)
  useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v4/seller/bookingreq`, {withCredentials: true})
        .then((d) => {
            if(d.data.success){
                let gg = d.data.bookings?.filter(v => v.sellerdecline === false)
                dispatch(setSellerBookReq(gg))
            }
        })
        .catch((err) => console.log(err))
  }, [isSeller])
}

export default SellerBookReq