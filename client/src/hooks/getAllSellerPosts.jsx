import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setSellerAllPosts} from '../toolkit/reducers/SellerSlice'


function getAllSellerPosts() {
    const dispatch = useDispatch()
    const authSeller = useSelector((d) => d.seller.isSeller)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v4/seller/getposts`, {
      withCredentials: true
    }).then((d) => {
          if(d.data.success){
              console.log(d.data.posts)
              dispatch(setSellerAllPosts(d.data.posts))
              // dispatch(setSellerAllPosts(d.data.posts))
          }
          else{
              console.log(d.data.message)
          }
    }).catch((err) => alert(err))
  }, [authSeller])
}

export default getAllSellerPosts