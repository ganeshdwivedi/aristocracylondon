"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity'
import urlFor from '../../../ImgUrl'
import Link from 'next/link'

const RelatedProducts = ({ id, type, category }) => {
    const [product, setProduct] = useState([])
    const categ = category ? `&& category == "${category}"` : ""
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
        setProduct(products)
    }
    useEffect(() => {
        sanityGet()
    }, [])

    return (
        <div className='my-20'>
            <div className="cayto-title-separator-wrap text-center mb-14 cst-title1 snipcss-KoyvF">
                <h2 className="cayto-title-separator cayto-title ">
                    <span>
                        You Might Also Like
                    </span>
                </h2>
            </div>
            <div className='md:grid md:grid-cols-3 grid-cols-1 gap-2 my-3'>

                {product?.map((item) =>
                    <Link key={item._id} className='md:w-[250px]' href={`/${category ? category : "products"}/${item.slug.current}`}>
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