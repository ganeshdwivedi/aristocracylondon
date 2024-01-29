import React from 'react'
import { FaComments } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

const ReviewSidebar = () => {
    return (
        <div className='flex flex-col gap-y-10 overflow-hidden'>
            <div className='border p-5'>
                <h3 className='text-[16px] items-center flex flex-row gap-x-2 text-[#282727]'><FaComments />Need help?</h3>
                <p className='text-[#5f5f5f] my-3 text-[14px]'>You can call us on 02037194525 (Mon - Sat: 10:00 to 18:00 & Sun: 11:00 to 17:00), or <span className='underline underline-offset-4 decoration-yellow-500'>submit your enquiry </span> to our customer experience team.</p>
            </div>
            <div className='border p-5'>
                <h3 className='text-[16px] items-center flex flex-row gap-x-2 text-[#282727]'><FaTruck />Free Delivery Over £80</h3>
                <p className='text-[14px] my-3 text-[#5f5f5f]'>Free delivery over £80, within 2-5 working days, anywhere in the UK. In-store collection also available upon request.</p>
                <button className='underline underline-offset-4 decoration-yellow-500 text-[14px]'>Delivery Policy {">>"}</button>
            </div>
            <div className='border p-5'>
                <h3 className='text-[16px] items-center flex flex-row gap-x-2 text-[#282727]'><FaTruck className='text-[16px] -scale-x-100' />30 Day Returns</h3>
                <p className='text-[14px] my-3 text-[#5f5f5f]'>Generous 30-day return window, one free exchange request per order and hassle-free refunds.</p>
                <button className='underline underline-offset-4 decoration-yellow-500 text-[14px]'>Returns & Refunds Policy {">>"} </button>
            </div>
            <div>
                <h3 className='text-[16px]'>Our Suits Travel In Style</h3>
                <iframe className='scale-x-105 my-4' src='https://www.youtube.com/embed/llxiQHVuuw0?si=ONTHp_1LWbDnSWwp'></iframe>
                <p className='text-[14px]'>Your suit will arrive in luxury packaging with a designer garment bag and a stylish suit hanger, complimentary tokens of our appreciation.</p>
            </div>
            <div>
                <h3 className='text-[16px]'>Suit Appointments</h3>
                <iframe className='scale-x-105 my-4' src='https://www.youtube.com/embed/6Wfq28AjWKc?si=jGHksAJNC2JmDg5K'></iframe>
                <p className='text-[14px]'>Do you want to view our suits up close and try them on before you purchase? Book an appointment and visit our flagship showroom in South Kensington.</p>
            </div>
        </div>
    )
}

export default ReviewSidebar