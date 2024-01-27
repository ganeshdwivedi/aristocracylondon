import React from 'react'
import BlogSlider from './BlogSlider'


const FinalBlog = () => {
    return (
        <div className="w-full h-full relative z-10 bg-fixed bg-[url('https://www.aristocracy.london/wp-content/uploads/2019/04/blog-banner-homepage-min.jpg?id=3772')]">
            <div className='py-[100px] xl:px-[8%] 2xl:px-[10%] px-[25px]  bg-black bg-opacity-30 bg-gradient-to-t from-[1%] from-black via-transparent to-transparent relative'>
                <div >
                    <BlogSlider />
                </div>
            </div>
        </div>
    )
}

export default FinalBlog