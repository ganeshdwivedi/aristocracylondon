import React from 'react'
import BlogSlider from './BlogSlider'


const FinalBlog = () => {
    return (
        <div className="w-full h-full bg-fixed bg-[url('https://www.aristocracy.london/wp-content/uploads/2019/04/blog-banner-homepage-min.jpg?id=3772')]">
            <div className='py-[100px] bg-black bg-opacity-30 bg-gradient-to-t from-[1%] from-black via-transparent to-transparent relative'>
                <h3 className='text-white text-center text-[20px] heading'>The Gentlemen's Blog</h3>
                <div className='mt-5'>
                    <BlogSlider />
                </div>
            </div>
        </div>
    )
}

export default FinalBlog