import GetAllProducts from '@/components/GetAllProducts'
import NavbarAfter from '@/components/NavbarAfter'
import React from 'react'

const page = () => {
    return (
        <div>
            <NavbarAfter />
            <GetAllProducts route={"products"} type={"Suits"} />
        </div>
    )
}

export default page