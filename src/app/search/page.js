import NavbarAfter from '@/components/NavbarAfter'
import SearchingProducts from '@/components/Product/SearchingProducts';
import React from 'react'

const page = (props) => {
    const { params, searchParams } = props;

    return (
        <div>
            <SearchingProducts searchParams={searchParams} type={"Product"} route={params.slug} params={params.slug} />
        </div>
    )
}

export default page