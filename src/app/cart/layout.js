import AboveNavbar from '@/components/AboveNavbar'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <AboveNavbar />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default layout