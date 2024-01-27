import GetAllProducts from '@/components/GetAllProducts'
import NavbarAfter from '@/components/NavbarAfter'
import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            <NavbarAfter heading={params.slug} subheading={"The perfect match for our suits"} />
            <GetAllProducts type={"Product"} route={params.slug} params={params.slug} />
        </div>
    )
}

export default page