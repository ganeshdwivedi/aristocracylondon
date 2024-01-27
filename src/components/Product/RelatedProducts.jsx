"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity'
import urlFor from '../../../ImgUrl'
import Link from 'next/link'

const RelatedProducts = ({ id, type, category }) => {
    const [product, setProduct] = useState([])
    console.log(category + "from")
    const categ = category ? `&& category == "${category}"` : ""
    console.log(categ)
    const sanityGet = async () => {
        const query = `*[_type == "${type}" ${categ} && _id != "${id}"]{
                title,
                slug,
                category,
                shoeType,
                price,
                description,
                images,
                _id,
              }`;
        const products = await client.fetch(query);
        console.log(products)
        setProduct(products)
    }
    useEffect(() => {
        sanityGet()
    }, [])

    return (
        <div className='my-20'>
            <h3 className='text-[20px]'>You Might Also Like</h3>
            <div className='md:grid md:grid-cols-3 grid-cols-1 my-3'>

                {product?.map((item) =>
                    <Link key={item._id} className='md:w-[250px]' href={`/${category}/${item.slug.current}`}>
                        <div className='md:w-[250px] w-full md:h-[250px] overflow-hidden relative shadow-black hover:shadow-lg'>
                            <p className='bg-[#d4bb59] text-white top-5 absolute p-2 text-[14px]'>Free Caravat</p>
                            <img className='w-full h-full object-cover' src={urlFor(item.images[0])} alt={item.title} />
                        </div>
                        <div className='my-3'>
                            <p className='text-[14px] text-[#4d4d4d]'>{item.title}</p>
                            <p className='text-[14px]'>£: {item.price}</p>
                        </div>
                    </Link>)}

            </div>
        </div>
    )
}

export default RelatedProducts