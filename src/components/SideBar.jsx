import React from 'react'

const SideBar = () => {
    const listcss = "text-[14px] text-[#5f5f5f] cursor-pointer"
    return (
        <div className='w-[16vw] md:block hidden'>
            <div className='flex flex-col'>
                <h3 className='text-[20px] font-medium'>Suits</h3>
                <ul className='flex flex-col gap-y-2 mt-5'>
                    <li className={listcss}>Wedding Suits</li>
                    <hr />
                    <li className={listcss}>Tuxedos & Dinner Suits</li>
                    <hr />
                    <li className={listcss}>Morning Suits & Tailcoats</li>
                    <hr />
                    <li className={listcss}>Nehru Suits</li>
                    <hr />
                    <li className={listcss}>Business & Lounge Suits</li>
                    <hr />
                    <li className={listcss}>Prom Suits</li>
                    <hr />
                    <li className={listcss}>Graduation Suits</li>
                    <hr />
                    <li className={listcss}>Race Day Suits</li>
                    <hr />
                    <li className={listcss}>Funeral Suits</li>
                    <hr />
                    <li className={listcss}>3 Piece Suits</li>
                    <hr />
                    <li className={listcss}>View All Men’s Suits</li>
                    <hr />
                </ul>
            </div>
            <div className='flex flex-col mt-5'>
                <h3 className='text-[20px] font-medium'>Complete The Look</h3>
                <ul className='flex flex-col gap-y-2 mt-5'>
                    <li className={listcss}>Shirts
                    </li>
                    <hr />
                    <li className={listcss}>Shoes</li>
                    <hr />
                    <li className={listcss}>Belts</li>
                    <hr />
                    <li className={listcss}>Cummerbunds & Bow Ties</li>
                    <hr />
                    <li className={listcss}>Ties & Pocket </li>
                    <hr />
                    <li className={listcss}>Squares</li>
                    <hr />
                    <li className={listcss}>Socks</li>
                    <hr />
                    <li className={listcss}>Pocket Watches</li>
                    <hr />
                    <li className={listcss}>Card Holders</li>
                    <hr />
                    <li className={listcss}>Suit Bags</li>
                    <hr />
                </ul>
            </div>
        </div>
    )
}

export default SideBar