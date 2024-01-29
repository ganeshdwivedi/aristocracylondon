import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FaBlackTie } from "react-icons/fa";

const HeroAfter = () => {
    return (
        <div className=' bg-white xl:px-[8%] 2xl:px-[10%] pt-20 flex flex-col md:flex-row gap-x-[50px] px-[25px]'>

            <div className='overflow-hidden md:w-[55vw] border'>
                <div className='relative hover:scale-125 transition-transform'>
                    <div className='z-10 hover:bg-opacity-20 hover:bg-white inset-0 absolute '></div>
                    <div className='overflow-hidden relative '>
                        <img className='w-full object-cover ' src='https://www.aristocracy.london/wp-content/uploads/2023/11/Homepage-Complete-the-Look-3.jpg' alt='' />
                    </div>
                </div>
                <div className='mt-16 text-center px-[10px] md:px-10 relative z-20'>
                    <h3 className='text-[22px] font-medium text-gray-600 underline underline-offset-[16px] decoration-4 decoration-[#d4bb59]'>Complete the Look</h3>
                    <p className='mt-[20px] text-[16px] text-slate-700'>Choose from our collection of 3 piece suits, complete the look with matching shirt, shoes and accessories, and get 10% off when you spend £1,000.</p>
                    <p className='mt-[20px] text-[16px] text-slate-700'>From tuxedos to nehru and morning suits, create an unforgettable outfit for your wedding day, black tie event or any other special occasion.</p>
                    <p className='mt-[20px] text-[16px] text-slate-700'>Pick everything you need in one place or let us match your suit to the right accessories for the ultimate hassle-free experience.</p>
                    <button className='bg-[#0a1a3c] my-[60px] text-[16px] font-medium text-white px-[20px] py-[15px]'> <LocalOfferIcon />  Shop Now</button>
                </div>
            </div>
            <div className='flex flex-col md:w-[30vw] gap-y-[30px]'>
                <div className='py-[20px] border flex flex-col items-center text-center overflow-hidden'>
                    <div className='w-[85%] h-[200px]'>
                        <iframe className='w-full h-full scale-105' src="https://www.youtube.com/embed/6Wfq28AjWKc" title="Suit Appointments" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <h3 className='text-[22px] mt-2 font-medium text-gray-600 underline underline-offset-[16px] decoration-4 decoration-[#d4bb59]'>Suit Appointments</h3>
                    <div className='mt-[20px]'>
                        <h4>Mon-Sat: 10:00 to 18:00</h4>
                        <h4>Sun: 11:00 to 17:00</h4>
                    </div>
                    <p className='mt-[20px] px-[10px] text-[16px] text-slate-700'>Book a free showroom appointment and enjoy a personalised shopping experience. A dedicated stylist will be available to help with fitting and answer your questions.</p>
                    <button className='bg-[#0a1a3c] my-[30px] text-[16px] font-medium text-white px-[20px] py-[10px]'> <CalendarMonthIcon />  Book Now</button>
                </div>
                <div className='py-[40px] border flex flex-col items-center text-center'>

                    <h3 className='text-[22px] mt-2 font-medium text-gray-600 underline underline-offset-[16px] decoration-4 decoration-[#d4bb59]'>Limited Edition
                    </h3>
                    <p className='mt-[20px] px-[10px] text-[16px] text-slate-700'>All our suits are limited edition, made with exclusive fabrics and superior craftsmanship. Explore our ready-to-wear collection and give yourself a celebrity makeover.</p>
                    <button className='bg-[#0a1a3c] flex flex-row items-center gap-x-3 my-[20px] text-[16px] font-medium text-white px-[20px] py-[15px]'><FaBlackTie fontSize={21} /> View All Suits</button>
                </div>
            </div>
        </div>
    )
}

export default HeroAfter