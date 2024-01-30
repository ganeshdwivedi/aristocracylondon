import React from 'react'
import { FaTruck } from "react-icons/fa6";
import { FaBlackTie } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const BeforeTesimonial = () => {
    return (
        <div className='grid grid-cols-1 gap-y-3 md:gap-y-0 md:grid-cols-3 place-items-center px-[25px] xl:px-[8%] 2xl:px-[10%]'>
            <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 p-4 -mb-7 z-[1] bg-white  border-[#c9c8c8] border-[3px] border-solid rounded-full'>
                    <FaTruck className='text-2xl cursor-pointer hover:text-yellow-600 text-[#aeaeae] relative z-[7] -mt-[5px]' />
                </div>
                <div className='border-t-[3px] px-5  relative  border-[#c9c8c8]'>
                    <h3 className='text-base bg-white pt-4 relative z-[2]'>Free Delivery Over  £80</h3>
                    <p className='text-[#7f7f7f] text-[14px] mt-2'>
                        Look dapper down to the last detail. Our in-house tailors can make any alterations you need for a bespoke fit within 10 working days</p>
                </div>
            </div>
            <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 p-4 -mb-7 z-[1] bg-white  border-[#c9c8c8] border-[3px] border-solid rounded-full'>
                    <FaBlackTie className='text-2xl cursor-pointer hover:text-yellow-600 text-[#aeaeae] relative z-[7] -mt-[5px]' />
                </div>
                <div className='border-t-[3px] px-5  relative  border-[#c9c8c8]'>
                    <h3 className='text-base bg-white pt-4 relative z-[2]'>Fitting Alterations</h3>
                    <p className='text-[#7f7f7f] text-[14px] mt-2'>
                        Look dapper down to the last detail. Our in-house tailors can make any alterations you need for a bespoke fit within 10 working days</p>
                </div>
            </div>
            <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 p-4 -mb-7 z-[1] bg-white  border-[#c9c8c8] border-[3px] border-solid rounded-full'>
                    <FaRegMoneyBillAlt className='text-2xl cursor-pointer hover:text-yellow-600 text-[#aeaeae] relative z-[7] -mt-[5px]' />
                </div>
                <div className='border-t-[3px] px-5  relative  border-[#c9c8c8]'>
                    <h3 className='text-base bg-white pt-4 relative z-[2]'>Loyalty Programme</h3>
                    <p className=' text-[14px] text-[#7f7f7f] mt-2'>
                        Look dapper down to the last detail. Our in-house tailors can make any alterations you need for a bespoke fit within 10 working days</p>
                </div>
            </div>
        </div>
    )
}

export default BeforeTesimonial