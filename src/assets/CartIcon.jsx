"use client"
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


const CartIcon = () => {
    const CartItems = useSelector((state) => state.cart)
    console.log(CartItems)
    return (
        <div>
            <button className="border hover:border-yellow-500 bg-white hover:text-yellow-500 w-8 transition-colors relative ease-linear h-8 rounded-full">
                <p className='absolute text-sm'>{CartItems.length}</p>
                <ShoppingCartIcon fontSize="small" /></button>
        </div>
    )
}

export default CartIcon