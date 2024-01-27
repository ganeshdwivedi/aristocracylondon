"use client"
import ReviewCard from '@/components/Product/ReviewCard'
import React from 'react'

const page = ({ params }) => {
    console.log(params.prslug)
    return (
        <div>
            <ReviewCard type={"Product"} params={params.prslug} />
        </div>
    )
}

export default page