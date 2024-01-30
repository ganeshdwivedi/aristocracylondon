import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {

    const footerLinkCss = 'transition-all ease-linear cursor-pointer  hover:relative hover:left-1 text-[15px] my-3 text-slate-500'
    return (
        <div className='flex bg-[#f7f6f7] flex-col '>
            <div className='grid md:grid-cols-3 xl:px-[8%] 2xl:px-[10%] px-[25px] lg:grid-cols-5 place-items-center py-[50px]'>
                <div className='text-center md:text-left my-5 md:my-0'>
                    <h3 className='text-[18px] mb-5'>Awards</h3>
                    <div className='grid grid-cols-3 gap-x-2'> <img src='https://www.aristocracy.london/wp-content/uploads/2024/01/London-Design-Awards-2023.png' alt='London award' />
                        <img src='https://www.aristocracy.london/wp-content/uploads/2024/01/London-Design-Awards-2023.png' alt='london award' />
                        <img src='https://www.aristocracy.london/wp-content/uploads/2024/01/London-Design-Awards-2023.png' alt='london award' /></div>
                    <div className='mt-5 leading-tight'><h3 className='text-[15px] font-medium text-slate-500'>Interior Design:<span className='font-[400]'>Flagship Store</span></h3>
                        <h3 className='text-[15px] font-medium text-slate-500'>Interior Design:<span className='font-[400]'>Retails, Shops, Department Stores & Mall</span></h3>
                        <h3 className='text-[15px] font-medium text-slate-500'>Packaging Design:<span className='font-[400]'>Fashion, Apparel & Accessories</span></h3> </div>
                </div>
                <div className='text-center md:text-left my-5 md:my-0'>
                    <h3 className='text-[18px] mb-5'>Shop</h3>
                    <ul className=''>
                        <li className={footerLinkCss}>Wedding Suits</li>
                        <li className={footerLinkCss}>Tuxedos</li>
                        <li className={footerLinkCss}>Morning Suits</li>
                        <li className={footerLinkCss}>Nehru Suits</li>
                        <li className={footerLinkCss}>Lounge Suits</li>
                        <li className={footerLinkCss}>3 Piece Suits</li>
                        <li className={footerLinkCss}>Men's Suits</li>
                    </ul>
                </div>
                <div className='text-center md:text-left my-5 md:my-0'>
                    <h3 className='text-[18px] mb-5'>Help</h3>
                    <ul>
                        <li className={footerLinkCss}>Size Guide</li>
                        <li className={footerLinkCss}>Delivery Tracking</li>
                        <li className={footerLinkCss}>My Rewards Scheme</li>
                        <li className={footerLinkCss}>Order Complimentaries</li>
                        <li className={footerLinkCss}>NewsLetter</li>
                        <li className={footerLinkCss}>FAQ's</li>
                        <li className={footerLinkCss}>Careers</li>
                    </ul>
                </div>
                <div className='text-center md:text-left my-5 md:my-0'>
                    <h3 className='text-[18px]  mb-5'>Legal</h3>
                    <ul>
                        <li className={footerLinkCss}>Terms & Conditions </li>
                        <li className={footerLinkCss}>Privacy Policy</li>
                        <li className={footerLinkCss}> Cookies Policy</li>
                        <li className={footerLinkCss}>Delivery Terms</li>
                        <li className={footerLinkCss}> Returns & Refunds</li>
                        <li className={footerLinkCss}> Appointments Policy</li>
                        <li className={footerLinkCss}> Alterations Policy</li>
                    </ul>
                </div>
                <div className='text-center md:text-left my-5 md:my-0'>
                    <h3 className='text-[18px] mb-5'>Contact</h3>
                    <div>
                        <div className='flex flex-row items-center gap-x-5'>
                            <MdEmail className='text-3xl text-slate-700' /><p className='text-[15px] text-slate-500'>Submit your enquiry to our customer experience team</p>
                        </div>
                        <div className='flex flex-row items-center gap-x-5'><IoLocation className='text-2xl text-slate-700' /><p className='text-[15px] text-slate-500 my-2'>15 Cromwell Road, SW7 2JB, London</p></div>
                        <div className='flex flex-row items-center gap-x-5'><MdOutlineWatchLater className='text-slate-700 text-3xl' /><p className='text-[15px] text-slate-500 my-2'>Mon - Sat: 10:00 to 18:00 & Sun: 11:00 to 17:00</p></div>
                        <div className='flex flex-row items-center gap-x-5 my-2'><FaPhoneAlt className='text-slate-700' /><p className='text-[15px] text-slate-500 my-2'>020 3719 4525</p></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-5 md:flex-row items-center justify-between md:grid-cols-2 py-7 xl:px-[8%] 2xl:px-[10%] px-[25px] bg-white'><p className='text-[#505050] text-sm md:text-left text-center'>@2024 Aristocracy London Ltd. Registration No 11300744 VAT No 386595142.</p>
                <img className='hover:opacity-100 opacity-70 h-[20px]' src='https://www.aristocracy.london/wp-content/uploads/2018/09/accept-logos.png' />
            </div>
        </div>
    )
}

export default Footer