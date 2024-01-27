import Link from 'next/link'
import React from 'react'

const ProductCard = ({ imgsrc, title, price, slug, type }) => {

    return (
        <Link href={`/${type}/${slug}`}>
            <div className='xl:w-[350px] lg:w-[300px] overflow-hidden relative shadow-black hover:shadow-lg'>
                <p className='bg-[#d4bb59] text-white top-5 absolute p-2 text-[14px]'>Free Caravat</p>
                <img className='w-full h-full object-cover' src={imgsrc} alt='' />
            </div>
            <div className='my-3'>
                <p className='text-[15px] text-[#4d4d4d]'>{title}</p>
                <p className='text-[14px]'>£: {price}</p>
            </div>
        </Link>
    )
}

export default ProductCard