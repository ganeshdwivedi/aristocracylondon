"use client"
import NavbarAfter from '@/components/NavbarAfter'
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import { Accordion, AccordionItem } from "@nextui-org/react";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddBoxIcon from '@mui/icons-material/AddBox';

const page = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const Data = [
        { title: 'Do You accept walk in?', description: 'We don’t accept walk-ins. If you arrive to the showroom without an appointment, we reserve the right to refuse service although we may suggest a suitable appointment slot based on availability.' },
        { title: 'How many guest i can bring', description: "You’re welcome to bring up to 2 guests with you. However, if members of your party wish to try on products, we’re not able to extend the appointment slot so please book an additional appointment." },
        { title: 'can i buy on the spot', description: 'Yes, you can purchase products on the spot in our showroom and either collect them immediately, subject to availability, or reserve in the showroom, e.g. if you want alterations made' },
        { title: 'How long will my appointment last', description: 'Each slot is 1 hour long' },
        { title: 'are products available', description: 'All our products are available both via the website and in our showroom.' },
        { title: 'Can ireserve items', description: "No, all purchases must be paid in full." },
        { title: 'I am getting married ', description: 'All our suits are limited edition so, if you have your heart set on a specific suit from our collection, we suggest you purchase it as soon as possible before it sells out. In terms of alterations for a perfect fit, you can arrange an appointment with our in-house tailoring partner 4-6 weeks before the event.' },
        { title: 'I am getting married ', description: 'All our suits are limited edition so, if you have your heart set on a specific suit from our collection, we suggest you purchase it as soon as possible before it sells out. In terms of alterations for a perfect fit, you can arrange an appointment with our in-house tailoring partner 4-6 weeks before the event.' }, { title: 'I am getting married ', description: 'All our suits are limited edition so, if you have your heart set on a specific suit from our collection, we suggest you purchase it as soon as possible before it sells out. In terms of alterations for a perfect fit, you can arrange an appointment with our in-house tailoring partner 4-6 weeks before the event.' }]


    return (
        <div>
            <NavbarAfter heading={"Suit Appointments"} subheading={"In the privacy of our flagship showroom"} />
            <div className='px-[25px] xl:px-[8%] 2xl:px-[10%] mt-20'>
                <p className='text-[14px] text-slate-500'>Book a free showroom appointment and enjoy a personalised shopping experience. A dedicated stylist will be available to help with fitting and answer your questions.</p>
                <div className='mt-10 flex flex-col items-center'>
                    <h3 className='text-[18px] text-center'>Book a 1-hour Slot</h3>
                    <div className='border lg:w-[60vw] mt-10 flex lg:flex-row flex-col items-center lg:items-start'>
                        <div className='p-10'>
                            <p className='text-[15px]'>Aristocracy London</p>
                            <h3 className='text-[24px] font-[600]'>Suit Appointment</h3>
                            <p className='text-[16px] flex flex-row gap-x-2 font-medium text-slate-600'><WatchLaterIcon />5 min</p>
                            <p className='text-[16px] flex flex-row gap-x-2  font-medium text-slate-600'><LocationOnIcon />Ground Floor, 15 Cromwell Road, SW7 2JB, London</p>
                            <p className='text-[15px] my-5'>You'll have a 60 mins consultation with one of our stylists.</p>
                        </div>
                        <div className=''>
                            <h3 className='text-[20px] mb-10 font-[600]'>Select a Date & Time</h3>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="Time"
                                minDate={new Date()}
                                inline calendarClassName='md:scale-90 xl:scale-100 scale-50'
                            />
                        </div>

                    </div>
                </div>
                <div className='my-20'>
                    <Accordion selectionMode='multiple' className='grid grid-cols-1 md:grid-cols-6'>
                        {Data.map((item, index) => <AccordionItem className='lg:w-[25vw] text-[#383737]' indicator={<AddBoxIcon className='text-[#383737]' />} key={index} aria-label={item.title} title={
                            <p className='text-sm'>{item.title}</p>
                        }>
                            <p className='text-sm text-[#383737]'>{item.description}</p>
                        </AccordionItem>)}
                    </Accordion>
                </div>
                <div className='my-20 p-10 bg-[#f3f2f2]'>
                    <iframe className='md:h-[300px] xl:h-[400px]' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14719.413748683992!2d75.84177455!3d22.7336883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706618210599!5m2!1sen!2sin" width={"100%"} height={"100%"} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className=''>
                    <iframe className='md:h-[400px] xl:h-[700px]' width={"100%"} height={"100%"} src="https://www.youtube.com/embed/mwkwOrZDGRk?&loop=1&playlist=mwkwOrZDGRk&loop=1controls=0&modestbranding=1&rel=0&vq=hd1080" allowFullScreen>
                    </iframe>
                </div>
            </div>

        </div>
    )
}

export default page
