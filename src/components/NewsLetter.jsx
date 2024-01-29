"use client"
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const NewsLetter = () => {


    return (
        <div className='lg:grid lg:grid-cols-2 flex gap-y-5  md:gap-y-0 flex-col md:flex-row place-items-center bg-[#d4bb59] text-white xl:px-[8%] 2xl:px-[10%] px-[25px] py-[50px]'>
            <div>
                <p className='text-[14px]'>Subscribe to our newsletter and be the first to know about new collections, offers and the gentleman’s style and etiquette blog.</p>
                <div className='mt-2 flex flex-row'> <input className='text-[12px] md:text-[14px] w-[160px] px-[20px] lg:w-[350px]' type='email' placeholder='Enter your email adress' /><button className='bg-[#0a1a3c] px-[20px] py-[10px]'>Subscribe</button></div>
            </div>
            <div className='grid grid-cols-1 place-items-center text-center'>
                <p className='text-[14px]'>Follow @AristocracyLondon and stay stylishly up-to-date. We are here to listen, inspire and build relationships.</p>
                <div className='flex flex-row gap-x-5 mt-2'>
                    <div className='bg-white transition-colors ease-linear text-black hover:text-white hover:bg-black p-3 rounded-full'> <FaFacebookF fontSize={'20px'} /></div>
                    <div className='bg-white transition-colors ease-linear text-black hover:text-white hover:bg-black p-3 rounded-full'><FaInstagram className='scale-125' fontSize={'20px'} /></div>
                </div>
            </div>


        </div>
    )
}

export default NewsLetter