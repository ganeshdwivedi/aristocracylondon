"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../../sanity'
import SideBar from '@/components/SideBar'
import urlFor from '../../../ImgUrl'
import BlogCard from '@/components/Blog/BlogCard'

const page = () => {
    const [product, setProduct] = useState([])

    const sanityGet = async () => {
        const query = `*[_type == "Blogs" ]{
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
        <div className='flex flex-row gap-x-16  pt-20 px-[25px] xl:px-[8%] 2xl:px-[10%]'>
            <div className='md:w-[70vw] xl:w-[60vw]'>
                <p className='text-[14px] text-[#3d3c3c] mb-5'>Read our blogs with style advice and modern etiquette for the 21st century gentleman. Take your sartorial pursuits and manners to the next level and stand out.</p>
                <hr />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 mt-10'>
                    {
                        product.map((item) => <BlogCard imgsrc={urlFor(item?.images[0])} title={item?.title} slug={item.slug.current} price={item?.price} />)
                    }
                </div>
            </div>
            <SideBar />

        </div>
    )
}

export default page