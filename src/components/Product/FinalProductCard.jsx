"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { client } from '../../../sanity'
import urlFor from '../../../ImgUrl'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FinalProductCard = ({ type, category, link }) => {

    const [product, setProduct] = useState([])
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };
    const nextHandler = () => {
        swiperRef.slideNext();
    };
    const categ = category ? `&& category == "${category}"` : "";

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
        <div className='my-20 relative'>
            <div className='absolute flex flex-row justify-center -top-10 gap-x-[75vw]'>
                <div onClick={prevHandler} className='hover:text-white transition-colors ease-linear bg-white p-1 hover:bg-black'>
                    <KeyboardArrowLeftIcon />
                </div>
                <div onClick={nextHandler} className='hover:text-white transition-colors ease-linear bg-white p-1 hover:bg-black'>
                    <KeyboardArrowRightIcon />
                </div>
            </div>
            <div>
                <Swiper
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        460: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}
                    slidesPerView={3}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => setSwiperRef(swiper)}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="CareerSwiper"
                >

                    {product?.map((item) => <SwiperSlide key={item._id}>
                        <ProductCard type={link} imgsrc={urlFor(item?.images[0])} title={item?.title} slug={item.slug.current} price={item?.price} /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default FinalProductCard