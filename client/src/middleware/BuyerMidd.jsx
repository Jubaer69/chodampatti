import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function BuyerMidd({children}) {

    const isBuyer = useSelector((d) => d.buyer.isBuyer);
  
    return isBuyer ? children : <Navigate to={'/login'} />
}

export default BuyerMidd