"use client"
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


const CartIcon = () => {
    const [cartItems, setCartItems] = useState();
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cartList'));
        setCartItems(cart)
    }, [cartItems])


    return (
        <div>
            <button className="border hover:border-yellow-500 bg-white hover:text-yellow-500 w-8 transition-colors relative ease-linear h-8 rounded-full">
                <p className='absolute text-sm'>{cartItems?.length}</p>
                <ShoppingCartIcon fontSize="small" /></button>
        </div>
    )
}

export default CartIcon