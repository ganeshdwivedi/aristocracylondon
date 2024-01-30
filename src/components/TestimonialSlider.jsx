"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TestimonialSlider = () => {

    const Data = [
        {
            imgsrc: "https://www.aristocracy.london/wp-content/uploads/2023/05/Henley-3-Piece-Navy-Tuxedo-11.jpg", name: 'Mohan Raikwar', description: "Excellent!!! Very good quality at really good price. Alexander and Giannis were super amazing too, can’t thank them enough. Would more than highly recommend to any friend and I know where to go for my next suit.",
            day: '17 January 2024'
        }, {
            imgsrc: "https://www.aristocracy.london/wp-content/uploads/2023/05/Henley-3-Piece-Navy-Tuxedo-11.jpg", name: 'Mohan Raikwar', description: "Excellent!!! Very good quality at really good price. Alexander and Giannis were super amazing too, can’t thank them enough. Would more than highly recommend to any friend and I know where to go for my next suit.",
            day: '17 January 2024'
        },
        {
            imgsrc: "https://www.aristocracy.london/wp-content/uploads/2023/05/Henley-3-Piece-Navy-Tuxedo-11.jpg", name: 'Mohan Raikwar', description: "Excellent!!! Very good quality at really good price. Alexander and Giannis were super amazing too, can’t thank them enough. Would more than highly recommend to any friend and I know where to go for my next suit.",
            day: '17 January 2024'
        },
        {
            imgsrc: "https://www.aristocracy.london/wp-content/uploads/2023/05/Henley-3-Piece-Navy-Tuxedo-11.jpg", name: 'Mohan Raikwar', description: "Excellent!!! Very good quality at really good price. Alexander and Giannis were super amazing too, can’t thank them enough. Would more than highly recommend to any friend and I know where to go for my next suit.",
            day: '17 January 2024'
        },
        {
            imgsrc: "https://www.aristocracy.london/wp-content/uploads/2023/05/Henley-3-Piece-Navy-Tuxedo-11.jpg", name: 'Mohan Raikwar', description: "Excellent!!! Very good quality at really good price. Alexander and Giannis were super amazing too, can’t thank them enough. Would more than highly recommend to any friend and I know where to go for my next suit.",
            day: '17 January 2024'
        }, {
            imgsrc: "https://www.aristocracy.london/wp-content/uploads/2023/05/Henley-3-Piece-Navy-Tuxedo-11.jpg", name: 'Mohan Raikwar', description: "Excellent!!! Very good quality at really good price. Alexander and Giannis were super amazing too, can’t thank them enough. Would more than highly recommend to any friend and I know where to go for my next suit.",
            day: '17 January 2024'
        }
    ]
    return (
        <div className='text-white mt-20 pb-[40px] bg-[#0a1a3c]'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="TestimonialSwipper"
            >
                {Data.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className='grid bg-white  place-items-center grid-cols-1'>
                            <div className='w-36 h-36  -mb-[60px] bg-white z-20 border-white border-[10px] overflow-hidden rounded-full'>
                                <img className='w-full h-full object-cover' src='https://www.aristocracy.london/wp-content/uploads/2023/04/Mayfair-3-Piece-Navy-Tuxedo-11.jpg' alt='' />
                            </div>
                            <div className='bg-[#0a1a3c] px-[25px] xl:px-[18%] 2xl:px-[20%] py-[100px] flex flex-col items-center'>
                                <h3 className='text-[24px]'>{item.name}</h3>
                                <p className='text-[#d0d070] text-[28px]'>&#9733;&#9733;&#9733;&#9733;&#9733; </p>
                                <p className='text-center text-[14px] mt-[20px]'>{item.description}</p>
                                <p className='mt-[20px] text-[14px]'>{item.day}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>

        </div>
    )
}

export default TestimonialSlider