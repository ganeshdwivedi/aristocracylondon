"use client"
import React, { useEffect, useState } from 'react'

const AboveNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
    }, [isSticky])

    return (
        <div className={isSticky ? 'hidden' : 'bg-white flex gap-x-3 justify-end p-2 pr-10 flex-row z-50 text-xs'} >
            <p className='hover:text-yellow-700 flex flex-row gap-x-1 items-center cursor-pointer'><img src='https://www.shutterstock.com/image-vector/flag-united-kingdom-vector-260nw-304681397.jpg' className='w-4 h-3 ' alt='' />GBP</p> |
            <p className='hover:text-yellow-700 cursor-pointer'>Checkout</p> |
            <p className='hover:text-yellow-700 cursor-pointer'>WishList</p> |
            <p className='hover:text-yellow-700 cursor-pointer'>Login or Register</p>
        </div >
    )
}

export default AboveNavbar