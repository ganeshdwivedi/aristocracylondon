import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import TestimonialSlider from '@/components/TestimonialSlider'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <TestimonialSlider />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default layout