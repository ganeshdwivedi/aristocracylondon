import React from 'react'

const Hero = () => {
    return (
        <div className='w-[133%] shadow-xl md:shadow-2xl shadow-black -left-[17%] h-[300px] md:h-[40vh] lg:h-[50vh] xl:h-[100vh] relative overflow-hidden'>
            <iframe className='scale-125' width={"100%"} height={"100%"} src="https://www.youtube.com/embed/mwkwOrZDGRk?autoplay=1&mute=1&loop=1&playlist=mwkwOrZDGRk&loop=1controls=0&modestbranding=1&rel=0&vq=hd1080" allowFullScreen>
            </iframe>

            <div className='absolute inset-0 w-full  md:h-[50vh] xl:h-[120vh]'>
                <div className='bg-black bg-opacity-60 relative md:w-[70vw] lg:w-[40vw] md:top-[10%] lg:top-[20%] top-10 left-[15%] w-[90vw] md:left-[32%] lg:left-[45%] py-5 px-3 md:px-12 text-center'>
                    <h3 className='uppercase text-white text-[18px] md:text-[28px]'>Luxury 3 Piece suits</h3>
                    <h2 className='text-white font-medium text-xl md:text-3xl lg:text-4xl uppercase mt-[10px] md:mt-[20px]'>Aristocracy London</h2>
                    <p className='text-white text-left  text-[13px] md:text-[20px] leading-tight mt-[10px] md:mt-[25px]'>Why blend in when you can out? Turn heads in a 3 piece suit that reflects your status</p>
                    <button className='bg-[#d4bb59] hover:bg-white hover:text-black hover:transition-colors bg-opacity-60 mt-[25px] text-white text-sm md:text-[20px] px-[20px] py-[5px]'>View Suits Collection</button>
                </div>
            </div>
        </div>
    )
}

export default Hero