"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/redux/CartSlice'
import urlFor from '../../../ImgUrl'
import getStripe from '../../../getStripe'
import { toast, Toaster } from 'react-hot-toast'
import Link from 'next/link'

const page = () => {
    const dispatch = useDispatch();
    // const cartItems = useSelector((state) => state.cart)
    const [cartItems, setCartItems] = useState([])
    const RemoveFromCart = (id) => {
        console.log("milgyi" + id)
        const cartITEM = JSON.parse(localStorage.getItem('cartList'));
        const updatedCartItems = cartITEM.filter(item => item._id !== id);
        localStorage.setItem('cartList', JSON.stringify(updatedCartItems));
    }
    useEffect(() => {
        const existingCartItemsJSON = localStorage.getItem('cartList');
        const existingCartItems = existingCartItemsJSON ? JSON.parse(existingCartItemsJSON) : [];
        setCartItems(existingCartItems)
    }, [cartItems])

    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItems)
        })
        if (response.statusCode === 500) return;
        toast.loading('...redirecting')
        const data = await response.json();
        stripe.redirectToCheckout({ sessionId: data.session.id })
    }

    return (
        <div className='px-[25px] xl:px-[8%] 2xl:px-[10%] pt-10'>
            <div className='bg-[#f7f6f7] my-5'>
                <p className='text-[15px] p-5 border-black border-t-4'>Returning customer? Login here to redeem your points, check out faster and earn 199 points worth £1.99 to spend on future purchases.</p>
            </div>
            <div className='bg-[#f7f6f7] my-5'>
                <p className='text-[15px] p-5 border-black border-t-4'>Do you have a gift card or coupon? Click here to enter your code.</p>
            </div>
            <div className='mt-10'>
                <h3 className='text-[22px]'>Shopping Cart</h3>
                <div className='flex flex-col md:flex-row justify-between mt-5'>
                    <p className='text-[14px] text-[#4d4d4d]'>Your items aren't reserved yet, checkout before they sell out!</p>
                    <div className='flex flex-row gap-x-3 md:mt-0 mt-5 md:gap-x-10'>
                        <Link href={"/products"} className='capitalize text-[14px] bg-white text-[#0a1a3c] px-4 md:px-9 py-2 border border-[#0a1a3c] transition-colors ease-linear hover:text-white hover:bg-[#0a1a3c]'>Continue Shopping</Link>
                        <button onClick={handleCheckout} className='capitalize text-[14px] border-[#0a1a3c] border hover:border-[#d4bb59] bg-[#0a1a3c] text-white px-4 md:px-9 py-2 transition-colors ease-linear hover:bg-[#d4bb59]'>Checkout</button>
                    </div>
                </div>
                <div className='my-10'>
                    <table className='w-full h-full'>
                        <thead className='grid grid-cols-4 border py-5'>
                            <tr >
                                <th>Product</th>
                            </tr>
                            <tr>
                                <th>Options</th>
                            </tr>
                            <tr>
                                <th>Quantity</th>
                            </tr>
                            <tr>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {
                            cartItems.map((item) =>
                                <tbody className='flex items-center flex-row justify-between border'>
                                    <tr>
                                        <div className='grid grid-cols-2'>
                                            <img className='w-20' src={urlFor(item?.images[0])} alt={item?.title} />
                                            <div>
                                                <p className='text-[14px]'>{item?.title}</p>
                                                <button onClick={() => RemoveFromCart(item?._id)}>Remove Item</button>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>43</tr>
                                    <tr>1</tr>
                                    <tr>£{item.price}</tr>
                                </tbody>)
                        }
                    </table>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default page