import ReviewCard from '@/components/Product/ReviewCard'
import React from 'react'

const page = ({ params }) => {
    console.log(params)
    return (
        <div>
            <ReviewCard type={"Suits"} params={params.slug} />
        </div>
    )
}

export default page