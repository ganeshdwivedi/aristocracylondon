"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity'
import urlFor from '../../../ImgUrl'
import Link from 'next/link'

const RelatedBlogs = ({ id }) => {
    const [product, setProduct] = useState([])

    const sanityGet = async () => {
        const query = `*[_type == 'Blogs' && _id != "${id}" ]{
                title,
                slug,
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
                        Others Also Read
                    </span>
                </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-5 xl:grid-cols-3 my-3'>
                {product?.map((item) =>
                    <Link key={item._id} className='md:w-[250px] ' href={`/blog/${item.slug.current}`}>
                        <div className='md:w-[250px] md:h-[250px] overflow-hidden relative shadow-black hover:shadow-lg'>
                            <img className='w-full h-full object-center object-cover' src={urlFor(item.images[0])} alt={item.title} />
                        </div>
                        <div className='my-3'>
                            <p className='text-[14px] text-[#4d4d4d]'>{item.title}</p>
                            <p className='text-[14px] h-[40px] overflow-clip'>{item.description}</p>
                        </div>
                    </Link>)}

            </div>
        </div>
    )
}

export default RelatedBlogs