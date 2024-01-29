import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SideBar = () => {
    const router = useRouter()
    const listcss = "text-[14px] text-[#5f5f5f] cursor-pointer"
    return (
        <div className='w-[16vw] md:block hidden'>
            <div className='flex flex-col'>
                <h3 className='text-[20px] font-medium'>Suits</h3>
                <ul className='flex flex-col gap-y-2 mt-5'>
                    <li onClick={() => router.replace(`/products/?suitType=Wedding Suits`)} className={listcss}>Wedding Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Tuxedos and Dinner Suits`)} className={listcss}>Tuxedos & Dinner Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Morning Suits and Tailcoats`)} className={listcss}>Morning Suits & Tailcoats</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Nehru Suits`)} className={listcss}>Nehru Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Business and Lounge Suits`)} className={listcss}>Business & Lounge Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Prom Suits`)} className={listcss}>Prom Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Graduation Suits`)} className={listcss}>Graduation Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Race Day Suits`)} className={listcss}>Race Day Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=Funeral Suits`)} className={listcss}>Funeral Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products/?suitType=3 Piece Suits`)} className={listcss}>3 Piece Suits</li>
                    <hr />
                    <li onClick={() => router.replace(`/products`)} className={listcss}>View All Men’s Suits</li>
                    <hr />
                </ul>
            </div>
            <div className='flex flex-col mt-5'>
                <h3 className='text-[20px] font-medium'>Complete The Look</h3>
                <ul className='flex flex-col gap-y-2 mt-5'>
                    <Link href={"/shirts"}>
                        <li className={listcss}>Shirts
                        </li></Link>
                    <hr />
                    <Link href={"/shoes"}><li className={listcss}>Shoes</li></Link>
                    <hr />
                    <Link href={"/belts"}><li className={listcss}>Belts</li></Link>
                    <hr />
                    <Link href={"/cummerbunds-and-Bow-Ties"}><li className={listcss}>Cummerbunds & Bow Ties</li></Link>
                    <hr />
                    <Link href={"/ties-and-Pocket"}><li className={listcss}>Ties & Pocket</li></Link>
                    <hr />
                    <Link href={"/squares"}><li className={listcss}>Squares</li></Link>
                    <hr />
                    <Link href={"/socks"}><li className={listcss}>Socks</li></Link>
                    <hr />
                    <Link href={"/pocket-Watches"}><li className={listcss}>Pocket Watches</li></Link>
                    <hr />
                    <Link href={"/card-Holders"}><li className={listcss}>Card Holders</li></Link>
                    <hr />
                    <Link href={"/suit-Bags"}><li className={listcss}>Suit Bags</li></Link>
                    <hr />
                </ul>
            </div>
        </div>
    )
}

export default SideBar