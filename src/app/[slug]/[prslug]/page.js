"use client"
import ReviewCard from '@/components/Product/ReviewCard'
import React from 'react'

const page = ({ params, props }) => {
    return (
        <div>
            <ReviewCard type={"Product"} params={params.prslug} />
        </div>
    )
}

export default page