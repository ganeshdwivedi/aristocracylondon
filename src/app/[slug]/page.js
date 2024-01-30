import GetAllProducts from '@/components/GetAllProducts'
import NavbarAfter from '@/components/NavbarAfter'
import React from 'react'

const page = ({ params }) => {
    const slug = params.slug
    const okay = slug.replaceAll('and', "&").replaceAll('-', " ")
    return (
        <div>
            <NavbarAfter heading={okay} subheading={"The perfect match for our suits"} />
            <GetAllProducts type={"Product"} route={params.slug} params={params.slug} />
        </div>
    )
}

export default page