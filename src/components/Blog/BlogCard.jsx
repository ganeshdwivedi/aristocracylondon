import React from 'react'
import Person3Icon from '@mui/icons-material/Person3';
import Link from 'next/link';

const BlogCard = ({ imgsrc, title, description, slug }) => {
    return (
        <Link href={`/blog/${slug}`}>
            <div className='xl:w-[350px] lg:w-[300px] md:w-[250px] h-full bg-white overflow-hidden'>
                <div className='relative  lg:w-[300px] md:w-[250px] xl:w-[350px] hover:scale-125 transition-transform'>
                    <img className='w-full h-full object-cover' src={imgsrc} alt='' />
                    <div className='inset-0 absolute hover:bg-white hover:bg-opacity-30'></div>
                </div>
                <div className='px-[20px] relative bg-white'>
                    <h3 className='overflow-clip text-[18px] mt-4'>{title}</h3>
                    <p className='text-[14px] text-slate-600 mt-2'>{description}</p>
                    <button className='text-[14px] hover:text-yellow-500 underline mt-2'>Read More {">>"}</button>
                </div>
                <div className='bg-[#0a1a3c] py-[10px] px-[20px] mt-[20px] text-white'>
                    <p className='text-[14px] flex flex-row gap-x-3'><Person3Icon fontSize='small' />By Lady Aristocracy</p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard