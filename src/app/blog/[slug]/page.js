"use client"
import SideBar from '@/components/SideBar'
import React, { useEffect, useState } from 'react'
import Person3Icon from '@mui/icons-material/Person3';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { client } from '../../../../sanity';
import urlFor from '../../../../ImgUrl';
import RelatedBlogs from '@/components/Blog/RelatedBlogs';

const page = ({ params }) => {

    const [product, setProduct] = useState([])

    const sanityGet = async () => {
        const query = `*[_type == 'Blogs' && slug.current == "${params?.slug}" ]{
                title,
                slug,
                description,
                images,
                _id,
              }`;
        const products = await client.fetch(query);
        setProduct(products)
    }
    useEffect(() => {
        sanityGet()
    }, [])


    return (
        <div className='px-[25px] xl:px-[8%] 2xl:px-[10%]'>
            {product.map((item) => <div key={item._id} className='pt-10 flex md:gap-x-10 flex-row'>
                <div className='md:w-[70vw]'>
                    <div className='overflow-hidden'>
                        <img className='w-full h-full object-cover object-center' src={urlFor(item?.images[0])} alt='' />
                    </div>
                    <div className='mt-3'>
                        <p className='text-[14px] flex flex-row gap-x-3'><Person3Icon fontSize='small' />By Lady Aristocracy</p>
                        <h3 className='text-[18px] mt-7'>{item?.title}</h3>
                        <div>
                            {item?.description}
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-5 my-5'>
                        <div className='p-2 border-slate-900 border hover:bg-slate-900 hover:text-white transition-colors ease-linear'><FacebookRoundedIcon /></div>  <div className='p-2 border-slate-900 border hover:bg-slate-900 hover:text-white transition-colors ease-linear'><TwitterIcon /> </div> <div className='p-2 border-slate-900 border hover:bg-slate-900 hover:text-white transition-colors ease-linear'><WhatsAppIcon /></div>
                    </div>
                    <div>
                        <RelatedBlogs id={item._id} />
                    </div>
                </div>
                <div className='w-[25vw]'>
                    <SideBar />
                </div>
            </div>)}

        </div>
    )
}

export default page