import React from 'react'
import { useParams } from 'react-router-dom'

function SellerComments() {
    const {id} = useParams()

  return (
    <div className='w-full text-white'>{id}</div>
  )
}

export default SellerComments