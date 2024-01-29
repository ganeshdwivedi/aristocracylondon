"use client"
import NavbarAfter from '@/components/NavbarAfter'
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import { Accordion, AccordionItem } from "@nextui-org/react";

const page = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const Data = [{ title: 'Do You accept walk in?', description: 'We don’t accept walk-ins. If you arrive to the showroom without an appointment, we reserve the right to refuse service although we may suggest a suitable appointment slot based on availability.' }, { title: 'How many guest i can bring', description: "You’re welcome to bring up to 2 guests with you. However, if members of your party wish to try on products, we’re not able to extend the appointment slot so please book an additional appointment." }, { title: 'can i buy on the spot', description: 'Yes, you can purchase products on the spot in our showroom and either collect them immediately, subject to availability, or reserve in the showroom, e.g. if you want alterations made' }, { title: 'How long will my appointment last', description: 'Each slot is 1 hour long' }, { title: 'are products available', description: 'All our products are available both via the website and in our showroom.' }, {
        title: 'Can ireserve items', description: "No, all purchases must be paid in full."
    }, { title: 'I am getting married ', description: 'All our suits are limited edition so, if you have your heart set on a specific suit from our collection, we suggest you purchase it as soon as possible before it sells out. In terms of alterations for a perfect fit, you can arrange an appointment with our in-house tailoring partner 4-6 weeks before the event.' }, { title: 'I am getting married ', description: 'All our suits are limited edition so, if you have your heart set on a specific suit from our collection, we suggest you purchase it as soon as possible before it sells out. In terms of alterations for a perfect fit, you can arrange an appointment with our in-house tailoring partner 4-6 weeks before the event.' }, { title: 'I am getting married ', description: 'All our suits are limited edition so, if you have your heart set on a specific suit from our collection, we suggest you purchase it as soon as possible before it sells out. In terms of alterations for a perfect fit, you can arrange an appointment with our in-house tailoring partner 4-6 weeks before the event.' }]

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div>
            <NavbarAfter heading={"Suit Appointments"} subheading={"In the privacy of our flagship showroom"} />
            <div className='px-[25px] xl:px-[8%] 2xl:px-[10%] mt-20'>
                <p className='text-[14px] text-slate-500'>Book a free showroom appointment and enjoy a personalised shopping experience. A dedicated stylist will be available to help with fitting and answer your questions.</p>
                <div className='mt-10'>
                    <h3 className='text-[18px] text-center'>Book a 1-hour Slot</h3>
                    <div className='border mt-10 flex flex-row '>
                        <div className='p-10'>
                            <p className='text-[15px]'>Aristocracy London</p>
                            <h3 className='text-[24px] font-[600]'>Suit Appointment</h3>
                            <p className='text-[16px] font-medium text-slate-600'>5 min</p>
                            <p className='text-[16px] font-medium text-slate-600'>Ground Floor, 15 Cromwell Road, SW7 2JB, London</p>
                            <p className='text-[15px]'>You'll have a 60 mins consultation with one of our stylists.</p>
                        </div>
                        <div>
                            <h3 className='text-[20px] mb-10 font-[600]'>Select a Date & Time</h3>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="Time"
                                minDate={new Date()}
                                inline  // Add the 'inline' prop to show the calendar directly
                            />
                        </div>

                    </div>
                </div>
                <div className=''>
                    <Accordion className='grid grid-rows-3'>
                        {Data.map((item, index) => <AccordionItem key={index} aria-label={item.title} title={
                            <p className='text-sm'>{item.title}</p>
                        }>
                            <p className='text-sm text-[#383737]'>{item.description}</p>
                        </AccordionItem>)}
                    </Accordion>
                </div>
            </div>

        </div>
    )
}

export default page