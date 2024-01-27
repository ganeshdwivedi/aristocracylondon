import NavbarAfter from '@/components/NavbarAfter'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='py-20'>

            <NavbarAfter subheading={"We are always hppy to help"} heading={"Contact Us"} />
            <div className='xl:px-[8%] 2xl:px-[10%] px-[25px]'>
                <p className='py-5 text-[13px] text-slate-600'>If you have any queries, please choose from the options below.</p>
                <div className='grid grid-cols-2 gap-x-8'>
                    <div className='border p-10 text-center'>
                        <h3 className='text-[18px]'>FAQs</h3>
                        <p>Visit our regularly updated <Link href={"/"} className="underline underline-offset-8 hover:text-yellow-600 decoration-yellow-600">FAQ page.</Link></p>
                    </div>
                    <div className='border p-10 text-center'>
                        <h3 className='text-[18px]'>Call</h3>
                        <p className='text-slate-500 text-[14px]'><a href={"tel:020 3719 4525"} className="text-[14px] text-slate-600 font-[600]">020 3719 4525</a> (Mon-Sat: 10am-6pm & Sun: 11am-5pm) </p>
                    </div>
                </div>
                <div className='mt-10'>
                    <h3 className='text-[20px] text-center'>Submit Your Enquiry</h3>
                    <p className='text-[14px]'>Alternatively, you can complete the form below. To help us deal with your query more efficiently, please select the most relevant subject category and include as many details as possible such as product name, order number etc.</p>

                    <form className='grid grid-cols-2 gap-x-10 mt-10'>
                        <div className='flex flex-col gap-y-5'>
                            <div className='flex flex-col'>
                                <label className='text-[13px] text-slate-600'>First Name</label>
                                <input className='py-1 px-3 border' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[13px] text-slate-600'>Last Name</label>
                                <input className='py-1 px-3 border' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[13px] text-slate-600'>Email</label>
                                <input className='py-1 px-3 border' type="email" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[13px] text-slate-600'>Mobile</label>
                                <input className='py-1 px-3 border' inputMode='numeric' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-5'>
                            <div className='flex flex-col'>
                                <label className='text-[13px] text-slate-600'>Subject</label>
                                <select className='border text-[15px] py-1 px-3'>
                                    <option>choose a subject</option>
                                    <option>Products & Order</option>
                                    <option>Returns & Exchanges</option>
                                    <option>Appointments</option>
                                    <option>Alterations</option>
                                    <option>Careers</option>
                                    <option>Press Enquiry</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[13px] text-slate-600'>Message</label>
                                <textarea cols={"40"} rows={"4"} className='border py-1' type='text' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-[13px] text-slate-600'>What's the capital of United Kingdom? *</label>
                                <input className='border py-1 px-3' type='text' />
                            </div>
                            <button className='bg-[#0a1a3c] self-end w-44 text-white px-[20px] py-[10px]'>Send Message</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default page