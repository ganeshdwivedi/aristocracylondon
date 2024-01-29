"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BlogCard from './BlogCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { client } from '../../../sanity';
import urlFor from '../../../ImgUrl';

const BlogSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };
    const nextHandler = () => {
        swiperRef.slideNext();
    };

    const [product, setProduct] = useState([])

    const sanityGet = async () => {
        const query = `*[_type == 'Blogs']{
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
        <div className='relative BlogSLIDER py-10'>
            <div className='my-5'>
                <h3 className='text-white text-center text-[20px] heading'>The Gentlemen's Blog</h3>
            </div>
            <div className='flex flex-row justify-between BlogSLIDERNAV'>
                <div onClick={prevHandler} className='hover:text-white transition-colors absolute top-8 left-0 ease-linear previousbutton bg-white p-1 hover:bg-black'>
                    <KeyboardArrowLeftIcon />
                </div>
                <div onClick={nextHandler} className='hover:text-white transition-colors ease-linear absolute top-8 right-0 bg-white p-1 hover:bg-black'>
                    <KeyboardArrowRightIcon />
                </div>
            </div>
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
                spaceBetween={60}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => setSwiperRef(swiper)}
                modules={[Autoplay, Pagination, Navigation]}
                className="BlogSwipper"
            >
                {product.map((item) => <SwiperSlide key={item._id}><BlogCard imgsrc={urlFor(item.images[0])} title={item.title} slug={item.slug.current} description={item.description} /> </SwiperSlide>)}

            </Swiper>

        </div>
    )
}

export default BlogSlider