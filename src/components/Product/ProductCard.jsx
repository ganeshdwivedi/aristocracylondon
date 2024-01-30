"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import urlFor from '../../../ImgUrl';
import { FaHeart } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { FaEye } from "react-icons/fa";

const ProductCard = ({ title, price, category, slug, suitType, imgsrc }) => {
    const [thumbnail, setThumbnail] = useState(null);
    const [toggle, setToggle] = useState(false)
    const changeImage = () => {
        setThumbnail(imgsrc[1])
        setToggle(true)
    }

    useEffect(() => {
    }, [imgsrc])

    const reChange = () => {
        setThumbnail(imgsrc[0])
        setToggle(false)
    }
    // if suittype there redirect to products and then category / and slug
    const RedirectBuilding = suitType ? `products` : category

    return (
        <>
            <Link onMouseLeave={reChange} onMouseOver={changeImage} href={`${RedirectBuilding}/${slug.current}`}>
                <div className='xl:w-[350px] lg:w-[300px] overflow-hidden relative shadow-black hover:shadow-lg'>
                    <p className='bg-[#d4bb59] text-white top-5 absolute p-2 text-[14px]'>Free Caravat</p>
                    <img className='w-full h-full object-cover' src={thumbnail == null ? urlFor(imgsrc[0]) : urlFor(thumbnail)} alt='' />
                    {
                        toggle ? <p className='bg-[#0a1a3c] gap-2 text-white top-32 flex flex-col absolute p-2 text-[14px]'>
                            <FaHeart />
                            <ImLoop />
                            <FaEye />
                        </p> : ""
                    }
                </div>
                <div className='my-3'>
                    <p className='text-[15px] text-[#4d4d4d]'>{title}</p>
                    <p className='text-[14px]'>£: {price}</p>
                </div>
            </Link>

        </>
    )
}

export default ProductCard