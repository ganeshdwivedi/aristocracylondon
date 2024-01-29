"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/redux/CartSlice'
import urlFor from '../../../ImgUrl'
import getStripe from '../../../getStripe'
import { toast, Toaster } from 'react-hot-toast'
import Link from 'next/link'
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { FaLock } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const page = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart)
    const RemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }
    console.log(cartItems)
    // useEffect(() => {
    //     const cart = JSON.parse(localStorage.getItem('cartList'));
    //     addTo
    // }, [])


    const handleCheckout = async () => {
        if (cartItems.length == 0) {
            toast.error('please add product to cart first')
        }
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
                <p className='text-[15px] p-5 border-black border-t-4 flex flex-row items-center'><PersonIcon fontSize='small' className='text-[#6e6e6e]' /> Returning customer? Login here to redeem your points, check out faster and earn 199 points worth £1.99 to spend on future purchases.</p>
            </div>
            <div className='bg-[#f7f6f7] my-5'>
                <p className='text-[15px] p-5 border-black border-t-4 flex flex-row items-center'><LocalOfferIcon className='text-[#6e6e6e]' fontSize='small' /> Do you have a gift card or coupon? Click here to enter your code.</p>
            </div>
            <div className='mt-10'>
                <h3 className='text-[22px]'>Shopping Cart</h3>
                <div className='flex flex-col md:flex-row justify-between mt-5'>
                    <p className='text-[14px] text-[#4d4d4d]'>Your items aren't reserved yet, checkout before they sell out!</p>
                    <div className='flex flex-row gap-x-3 md:mt-0 mt-5 md:gap-x-10'>
                        <Link href={"/products"} className='capitalize text-[14px] bg-white text-[#0a1a3c] px-4 md:px-9 py-2 border border-[#0a1a3c] transition-colors ease-linear hover:text-white hover:bg-[#0a1a3c]'>Continue Shopping</Link>
                        <button onClick={handleCheckout} className='capitalize text-[14px] border-[#0a1a3c] border hover:border-[#d4bb59] bg-[#0a1a3c] text-white px-4 md:px-9 py-2 transition-colors ease-linear flex flex-row items-center gap-x-3 hover:bg-[#d4bb59]'><FaLock /> Checkout</button>
                    </div>
                </div>
                <div className='my-10'>
                    <table className='w-full h-full'>
                        <thead className='grid grid-cols-1 md:grid-cols-10 border '>
                            <tr className='md:col-span-4 border py-5'>
                                <th className='text-base pl-3 font-normal text-slate-600'>Product</th>
                            </tr>
                            <tr className='md:col-span-2 border py-5'>
                                <th className='text-base pl-3 font-normal text-slate-600'>Options</th>
                            </tr>
                            <tr className='md:col-span-2 border py-5'>
                                <th className='text-base pl-3 font-normal text-slate-600'>Quantity</th>
                            </tr>
                            <tr className='md:col-span-2 border py-5'>
                                <th className='text-base pl-3 font-normal text-slate-600'>Price</th>
                            </tr>
                        </thead>
                        {
                            cartItems.map((item) =>
                                <tbody className='grid grid-cols-10  border '>
                                    <tr className='md:col-span-4 border p-5'>
                                        <div className='flex gap-x-4 flex-row items-center'>
                                            <img className='w-20' src={urlFor(item?.images[0])} alt={item?.title} />
                                            <div>
                                                <p className='text-[14px]'>{item?.title}</p>
                                                <button className='text-xs mt-4 hover:text-yellow-600 flex flex-row gap-x-2 transition-colors ease-linear' onClick={() => RemoveFromCart(item?._id)}><RxCross1 /> Remove Item</button>
                                                <button className='text-xs hover:text-yellow-600 flex flex-row gap-x-2 transition-colors ease-linear'><FaHeart /> Add to Wishlist</button>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr className='md:col-span-2 border p-5 text-sm text-[#676666]' >Size: 43</tr>
                                    <tr className='md:col-span-2 p-5 border text-[#676666] text-sm'>1</tr>
                                    <tr className='md:col-span-2 p-5 border text-[#676666] text-sm'>£{item.price}</tr>
                                </tbody>)
                        }
                    </table>
                </div>
            </div>
            <Toaster />

        </div >
    )
}

export default page
