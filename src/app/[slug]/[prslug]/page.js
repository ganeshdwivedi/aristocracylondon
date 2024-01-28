"use client"
import ReviewCard from '@/components/Product/ReviewCard'
import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            <ReviewCard type={"Product"} params={params.prslug} />
        </div>
    )
}

export default page