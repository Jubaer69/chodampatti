import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllPosts } from '../toolkit/reducers/BuyerSlice'

function BrowsePost() {
    const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v4/buyer/allposts`)
    .then((d) => {
        if(d.data.success){
            dispatch(setAllPosts(d.data.posts))
            
        }
        else{
            dispatch(setAllPosts([]))
            
        }
    }   
    )
    .catch((err) => console.log(err))
  }, [])
}

export default BrowsePost