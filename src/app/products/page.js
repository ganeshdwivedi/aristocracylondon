import GetAllProducts from '@/components/GetAllProducts'
import NavbarAfter from '@/components/NavbarAfter'
import React from 'react'

const page = (props) => {
    console.log(props.searchParams)
    return (
        <div>
            <NavbarAfter heading={"Men’s Suits"} subheading={"10% off when you spend £1,000"} />
            <GetAllProducts props={props.searchParams} route={"products"} type={"Suits"} />
        </div>
    )
}

export default page