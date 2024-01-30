"use client"
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import ProductCard from './Product/ProductCard'
import { client } from '../../sanity'

const GetAllProducts = ({ params, type, route, props, searchParams }) => {
    const [product, setProduct] = useState([])

    const category = params
    const fine = props ? props.suitType : null
    const okay = fine ? fine.replaceAll('and', "&") : ""
    const Suit = okay ? (props.suitType ? `&& suitType == "${okay}"` : "") : ""

    const categ = category ? `&& category == "${category}"` : ""

    const sanityGet = async () => {
        const query = `*[_type == "${type}" ${categ} ${Suit}]{
                title,
                slug,
                suitType,
                category,
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
    }, [props, searchParams])

    return (
        <div className='flex flex-row gap-x-16  mt-20 px-[25px] xl:px-[8%] 2xl:px-[10%]'>
            <SideBar />
            <div className='md:w-[60vw] lg:w-[65vw] xl:w-[60vw]'>
                <p className='text-[14px] text-[#3d3c3c] mb-5'>Whether you’re looking for a dress shirt for a formal event or a kent collar one for a business meeting, our shirt collection is the epitome of sophistication. All our shirts are made from luxury cotton, with a touch of elastane for a stretch finish, and feature double cuffs, perfect for the free cufflinks we include with every order. Choose from a selection of different collars and styles that have been designed to accommodate different looks, from tuxedos and cravat suits to business outfits and beyond.</p>
                <hr />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 mt-10'>
                    {
                        product.map((item) => <ProductCard item={item} Category={item.category} type={`${route}`} imgsrc={item.images} title={item?.title} slug={item.slug} price={item?.price} />)
                    }
                </div>
            </div>

        </div>
    )
}

export default GetAllProducts
