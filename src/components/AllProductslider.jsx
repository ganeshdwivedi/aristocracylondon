import React from 'react'
import FinalProductCard from './Product/FinalProductCard'

const AllProductslider = () => {
    return (
        <div className='px-[25px] xl:px-[8%] 2xl:px-[10%]'>
            <div class="cayto-title-separator-wrap text-center mb-14 cst-title1 snipcss-KoyvF">
                <h2 class="cayto-title-separator cayto-title ">
                    <span>
                        Collection Highlights
                    </span>
                </h2>
            </div>
            <FinalProductCard type={"Suits"} link={"products"} />
            <FinalProductCard type={"Product"} link={"shirts"} category={"shirts"} />
            <FinalProductCard type={"Product"} link={"shoes"} category={"shoes"} />
        </div>
    )
}

export default AllProductslider