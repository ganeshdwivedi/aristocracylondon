"use client"
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import ProductCard from './Product/ProductCard'
import { client } from '../../sanity'
import urlFor from '../../ImgUrl'

const GetAllProducts = ({ params, type, route }) => {
    const [product, setProduct] = useState([])

    const category = params
    const categ = category ? `&& category == "${category}"` : ""
    const sanityGet = async () => {
        const query = `*[_type == "${type}" ${categ} ]{
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
        <div className='flex flex-row gap-x-16  mt-20 px-[25px] xl:px-[8%] 2xl:px-[10%]'>
            <SideBar />
            <div className='md:w-[70vw] xl:w-[60vw]'>
                <p className='text-[14px] text-[#3d3c3c] mb-5'>Whether you’re looking for a dress shirt for a formal event or a kent collar one for a business meeting, our shirt collection is the epitome of sophistication. All our shirts are made from luxury cotton, with a touch of elastane for a stretch finish, and feature double cuffs, perfect for the free cufflinks we include with every order. Choose from a selection of different collars and styles that have been designed to accommodate different looks, from tuxedos and cravat suits to business outfits and beyond.</p>
                <hr />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 mt-10'>
                    {
                        product.map((item) => <ProductCard type={`${route}`} imgsrc={urlFor(item?.images[0])} title={item?.title} slug={item.slug.current} price={item?.price} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default GetAllProducts