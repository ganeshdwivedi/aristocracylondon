"use client"
import NavbarAfter from '@/components/NavbarAfter'
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";

const page = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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

            </div>
        </div>
    )
}

export default page