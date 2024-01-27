import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const OurSuitsInTravels = () => {
    return (
        <div className='xl:px-[8%]  bg-white 2xl:px-[10%] py-10 items-center px-[30px]'>
            <div class="cayto-title-separator-wrap text-center mb-14 cst-title1 snipcss-KoyvF">
                <h2 class="cayto-title-separator cayto-title ">
                    <span>
                        Our Suits Travel in Style
                    </span>
                </h2>
            </div>

            <div className='flex flex-col gap-y-10 md:gap-y-0 md:flex-row justify-between mt-[30px]'>
                <div className='md:w-[28vw] lg:w-[23vw] xl:w-[20vw]'>
                    <p className='text-[14px] text-slate-600 '>Every suit comes with three carefully curated complimentaries. These aren’t just our way of thanking you for your custom; each one of our gifts will help you maintain the look and feel of your suit for longer.</p>
                    <ul className='mt-[20px]'>
                        <li className='OurSuitsTravel'>Stylish Suit Packaging</li>
                        <li className='OurSuitsTravel'>Free Signature Suit Bag</li>
                        <li className='OurSuitsTravel'>Free Luxury Suit Hanger</li>
                    </ul>
                    <button className='mt-[20px] text-[14px] underline underline-offset-8 decoration-[#d4bb59] hover:text-[#d4bb59]'>View Order Complimentaries {">>"}</button>
                </div>
                <div className='md:w-[55vw] h-[200px] md:h-[30vw] overflow-hidden'>
                    <iframe className='' width="100%" height="100%"
                        src="https://www.youtube.com/embed/llxiQHVuuw0">
                    </iframe>
                </div>
            </div>


        </div>
    )
}

export default OurSuitsInTravels