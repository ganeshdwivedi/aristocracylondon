"use client"
import React, { useEffect, useState } from 'react'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ReviewSidebar from './ReviewSidebar';
import { client } from '../../../sanity';
import ReviewTabs from './ReviewTabs';
import urlFor from '../../../ImgUrl';
import getStripe from '../../../getStripe';
import toast, { Toaster } from 'react-hot-toast';
import RelatedProducts from './RelatedProducts';
import { addToCart } from '@/redux/CartSlice';
import { UseDispatch, useDispatch } from 'react-redux';

const ReviewCard = ({ params, type }) => {
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const dispatch = useDispatch()
    const sanityGet = async () => {
        const query = `*[_type == "${type}" && slug.current == "${params}" ]{
                title,
                slug,
                category,
                price,
                description,
                images,
                _id,
              }`;
        const products = await client.fetch(query);
        setProduct(products)
        setImages(products[0].images)
    }
    console.log(product[0]?.category)
    useEffect(() => {
        sanityGet()
    }, [])

    const AddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success("product added successfully");
        localStorage.setItem("cartList", [JSON.stringify(product)])
    }

    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if (response.statusCode === 500) return;
        toast.loading('...redirecting')
        console.log(stripe)
        const data = await response.json();
        console.log(data.session.id)
        stripe.redirectToCheckout({ sessionId: data.session.id })
    }

    return (
        <>
            {product?.map(product =>
                <div className='xl:px-[8%] pt-10 2xl:px-[10%] px-[25px] flex flex-col lg:flex-row gap-x-10'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col lg:flex-row gap-x-5'>
                            <div className='lg:w-[30vw] w-full overflow-hidden'>
                                <div className='lg:w-[30vw] w-full overflow-hidden'>
                                    <img className='w-full h-ful object-cover object-center' src={urlFor(thumbnail ? thumbnail : product.images[0])} alt='' />
                                </div>
                                <div className='flex flex-row my-3 pl-10 ReviewCard justify-center overflow-x-scroll items-center gap-x-3'>
                                    {
                                        images?.map((item) => <img onClick={() => setThumbnail(item)} className='w-20 h-20' src={urlFor(item)} />)

                                    }
                                </div>
                            </div>
                            <div className='w-full lg:w-[30vw]'>
                                <div className='my-3'>
                                    <h3 className='text-[18px] font-[600]'>{product?.title}
                                    </h3>
                                    <p className='text-[18px]'>£ {product?.price}</p>
                                </div>
                                <hr />
                                <div className='my-3'>
                                    <p className='text-[14px] text-[#5f5f5f]'>{product?.description}</p>
                                </div>
                                <div className='grid grid-cols-2 my-5'>
                                    <label className='text-[13px]'>Size</label>
                                    <select className='border py-2 px-3 text-[14px]'>
                                        <option>Select an Option</option>
                                        <option>8uk</option>
                                        <option>10uk</option>
                                        <option>12uk</option>
                                    </select>
                                </div>
                                <div className='flex flex-row my-5 gap-x-3 items-center text-[14px]'><CheckroomIcon /> Find Your Size</div>
                                <div className='my-4'>
                                    <p className='text-[14px] text-[#5f5f5f]'>Quantity:<span className='text-[#494949]'> 1</span></p>
                                    <div className='grid grid-cols-1 md:gap-y-0 gap-y-4 md:grid-cols-2 gap-x-2 my-5'>
                                        <button onClick={() => AddToCart(product)} className='capitalize text-[14px] bg-[#0a1a3c] text-white px-9 py-2 transition-colors ease-linear hover:bg-[#d4bb59]'>Add to cart</button>
                                        <button onClick={handleCheckout} className='capitalize text-[14px] bg-white text-[#0a1a3c] px-9 py-2 border border-[#0a1a3c] transition-colors ease-linear hover:text-white hover:bg-[#0a1a3c]'>Book Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-20">
                            <ReviewTabs />
                        </div>
                        <div>
                            <RelatedProducts type={type} category={product.category} id={product._id} />
                        </div>
                    </div>

                    <div>
                        <ReviewSidebar />
                    </div>
                    <Toaster />
                </div >
            )}
        </>
    )
}

export default ReviewCard