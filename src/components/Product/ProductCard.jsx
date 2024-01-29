import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import urlFor from '../../../ImgUrl';
import { FaHeart } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { FaEye } from "react-icons/fa";

const ProductCard = ({ imgsrc, title, price, slug, type }) => {
    const [image, setImage] = useState();
    const [thumbnail, setThumbnail] = useState(null);
    const [toggle, setToggle] = useState(false)

    console.log(imgsrc)
    const changeImage = () => {
        setThumbnail(imgsrc[1])
        setToggle(true)
    }

    useEffect(() => {
        setImage(imgsrc[0])
        console.log(image)
    }, [])
    const reChange = () => {
        setThumbnail(imgsrc[0])
        setToggle(false)
    }

    return (
        <Link onMouseLeave={reChange} onMouseOver={changeImage} href={`/${type}/${slug}`}>
            <div className='xl:w-[350px] lg:w-[300px] overflow-hidden relative shadow-black hover:shadow-lg'>
                <p className='bg-[#d4bb59] text-white top-5 absolute p-2 text-[14px]'>Free Caravat</p>
                <img className='w-full h-full object-cover' src={thumbnail ? urlFor(thumbnail) : urlFor(imgsrc[0])} alt='' />
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
    )
}

export default ProductCard