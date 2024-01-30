"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/Logo";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import SearchIc from "@/assets/SearchIcon";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Accordion, AccordionItem } from "@nextui-org/react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    const [toggle, settoggle] = useState(false);
    const [toggleSearch, setToggleSeach] = useState(false)
    const [isSticky, setIsSticky] = useState(false);
    const [searchValue, setSearchValue] = useState("")
    const Toggle = () => {
        settoggle(!toggle);
    };
    const router = useRouter()
    const CartItems = useSelector((state) => state.cart)
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
    }, [isSticky])

    const navlinkcss =
        " text-[15px] text-white hover:text-yellow-500 cursor-pointer";
    const mobNavlinkcss =
        "text-[16px] font-medium text-white hover:underline decoration-black decoration-2 underline-offset-8";
    const listcss = "text-[14px] my-[3px] text-black cursor-pointer hover:relative left-1 transition-all linear-ease hover:text-yellow-600"

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    return (
        <>
            <nav className="relative">
                <div className={isSticky ? 'fixed bg-[#0a1a3c] flex  shadow-md  w-full z-[60] flex-row justify-between xl:px-[8%] 2xl:px-[10%] items-center md:py-0 py-2 px-[25px]' : 'flex bg-[#0a1a3c] shadow-md  w-full z-[60] flex-row justify-between xl:px-[8%] 2xl:px-[10%] items-center  py-3 px-[25px]'}>
                    <Link href={"/"}>
                        <Logo className={"md:h-[60px] md:w-full w-36"} />
                    </Link>
                    {
                        toggleSearch ? <div className="bg-white left-0 top-0 w-[100%] absolute z-10 h-28">
                            <form className="flex px-[5vw] flex-row items-center" onSubmit={(e) => e.preventDefault()}>
                                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-[90vw] px-[3vw] h-20 text-xl" type="search" placeholder="Search" />
                                <button onClick={() => router.replace(`/search?query=${searchValue}`)} type="submit"></button>
                                <button onClick={() => setToggleSeach(false)}><CloseIcon /></button>
                            </form>
                        </div> : ""
                    }
                    <div className="flex-row flex h-full gap-x-5">
                        <ul className="flex-row lg:flex hidden items-center gap-x-[40px]">
                            <li className={navlinkcss + "relative py-[10px] lg:py-[40px] h-full cursor-pointer NAVSHOP"}>
                                Shop
                                <div className={isSticky ? "absolute z-[5] shadow-md overflow-hidden bg-white flex flex-row justify-around top-[103px] mx-[25px] xl:mx-[8%] 2xl:mx-[10%] py-6 h-[300px] inset-0" : "absolute z-[5] shadow-md overflow-hidden bg-white flex flex-row justify-around top-[110px] mx-[25px] xl:mx-[8%] 2xl:mx-[10%] py-6 h-[300px] inset-0"}>
                                    <div className='flex flex-col'>
                                        <h3 className='text-[15px] text-black font-medium '>Suits</h3>
                                        <ul className='flex flex-col gap-y-1'>
                                            <li onClick={() => router.replace(`/products/?suitType=Wedding Suits`)} className={listcss}>Wedding Suits</li>
                                            <li onClick={() => router.replace(`/products/?suitType=Tuxedos and Dinner Suits`)} className={listcss}>Tuxedos & Dinner Suits</li>
                                            <li onClick={() => router.replace(`/products/?suitType=Morning Suits and Tailcoats`)} className={listcss}>Morning Suits & Tailcoats</li>
                                            <li onClick={() => router.replace(`/products/?suitType=Nehru Suits`)} className={listcss}>Nehru Suits</li>
                                            <li onClick={() => router.replace(`/products/?suitType=Business and Lounge Suits`)} className={listcss}>Business & Lounge Suits</li>
                                            <li onClick={() => router.replace(`/products/?suitType=Prom Suits`)} className={listcss}>Prom Suits</li>
                                            <li onClick={() => router.replace(`/products/?suitType=Graduation Suits`)} className={listcss}>Graduation Suits</li>
                                            <Link href={"/products"}>
                                                <li className={listcss}>View All Men’s Suits</li>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-black font-medium">Shirts</p>
                                        <Link className="" href={"/shirts"}>
                                            <div className="w-[190px] h-[300px] overflow-hidden">
                                                <img className="w-full h-full object-cover" src="https://www.aristocracy.london/wp-content/uploads/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/9/4/9425/thumb450x450/859892690/White-Tuxedo-Shirt-with-Hidden-Buttons-3.jpg" alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="overflow-hidden">
                                        <Link href={"/shoes"} className=" flex flex-col">
                                            <p className="text-black font-medium">Shoes</p>
                                            <div className="w-[190px] h-[300px]">
                                                <img className="object-cover w-full h-full" src="https://www.aristocracy.london/wp-content/uploads/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/1/1/11083/thumb450x450/3567802239/Esher-Black-Velvet-Patent-Leather-Shoes-41.jpg" alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-black font-medium ">Accessories</p>
                                        <ul>
                                            <Link href={"/belts"}>
                                                <li className={listcss}>Belts</li>
                                            </Link>
                                            <Link href={"/cummerbunds-and-bow-Ties"}>
                                                <li className={listcss}>Cummerbunds & Bow Ties</li>
                                            </Link>
                                            <Link href={"/ties-and-pocket-squares"}>
                                                <li className={listcss}>Ties & Pocket Squares</li>
                                            </Link>
                                            <Link href={"/socks"}>
                                                <li className={listcss}>Socks</li>
                                            </Link>
                                            <Link href={"/pocket-watches"}>
                                                <li className={listcss}>Pocket Watches</li>
                                            </Link>
                                            <Link href={"/card-holders"}>
                                                <li className={listcss}>Card Holders</li>
                                            </Link>
                                            <Link href={"/suit-bags"}>
                                                <li className={listcss}>Suit Bags</li>
                                            </Link>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-black font-medium ">Accessories</p>
                                        <ul>
                                            <Link href={"/belts"}>
                                                <li className={listcss}>Boy's Suits</li>
                                            </Link>
                                            <Link href={"/belts"}>
                                                <li className={listcss}>Boy's Shirts</li>
                                            </Link>

                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={navlinkcss}>
                                <Link href={"/appointment"}>
                                    Appointment
                                </Link>
                            </li>
                            <li className={`${navlinkcss} NAVFASHION relative py-[10px] lg:py-[40px] h-full`}>
                                The Fashion House
                                <div className="absolute NAVFASHIONInner z-[5] shadow-md overflow-hidden bg-white  flex-col top-[102px] p-5 w-[200px] h-[100px] inset-0">
                                    <p className={`${listcss} `}>Our Story</p>
                                    <Link href={"/blog"} className={`${listcss} `}>The Gentlemen's Blog</Link>
                                </div>
                            </li>
                            <li className={`${navlinkcss}`}>
                                <Link className=" relative" href={"/contact"}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="flex flex-row items-center gap-x-3 md:gap-x-5">
                            <div onClick={() => setToggleSeach(!toggle)}>
                                <SearchIc />
                            </div>
                            <Link className="" href={"/cart"}>
                                <div className='relative hover:border-yellow-500 hover:text-yellow-500'>
                                    <button className="border  bg-white  w-8 transition-colors relative ease-linear h-8 rounded-full">
                                        <ShoppingCartIcon fontSize="small" /></button>
                                    <p className='absolute w-5 h-5 text-center pt-[2px] -right-2 bg-white rounded-full -top-2 text-xs'>{CartItems.length}</p>
                                </div>
                            </Link>
                            <button
                                onClick={Toggle}
                                className="text-white block lg:hidden Hamburger "
                            >
                                {toggle ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>

            </nav>
            {toggle && (
                <div
                    className="p-5 z-50 right-5 fixed duration-1000 delay-300 ease-in-out bg-black"
                >
                    <div className="">
                        <div className="lg:hidden block">
                            <Accordion>
                                <AccordionItem className="text-white" key="Shop" aria-label="Shop" indicator={<ArrowDropDownIcon />} title={
                                    <p className={mobNavlinkcss}>Shop</p>
                                }>
                                    <Accordion className="bg-white">
                                        <AccordionItem className="" key="Suit" aria-label="Suit" indicator={<ArrowDropDownIcon />} title={
                                            <p className={"text-sm"}>Suit</p>
                                        }>
                                            <div className="text-black">
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
                                        </AccordionItem>
                                        <AccordionItem className="text-white" key="Shirt" aria-label="Shirt" indicator={<ArrowDropDownIcon />} title={
                                            <p className={"text-sm"}>Shirt</p>
                                        }>
                                            <Link href={"/shirts"} className=""><img className="w-20 h-20" src="https://cdn.sanity.io/images/4fxtm919/production/576d88fbcd60f3fc0de900a1f9bf767831085043-450x450.jpg" alt="" /></Link>
                                        </AccordionItem>
                                        <AccordionItem className="text-white" key="Shoes" aria-label="Shoes" indicator={<ArrowDropDownIcon />} title={
                                            <p className={"text-sm"}>Shoes</p>
                                        }>
                                            <Link href={"/shoes"} className=""><img className=" h-20" src="https://cdn.sanity.io/images/4fxtm919/production/14a9498ee1d06260ffe170c3c1747d423f4698ed-1200x1200.jpg" alt="" /></Link>
                                        </AccordionItem>
                                        <AccordionItem className="text-white" key="Accessories" aria-label="Accessories" indicator={<ArrowDropDownIcon />} title={
                                            <p className={"text-sm"}>Accessories</p>
                                        }>
                                            <ul className='flex text-black flex-col gap-y-2 mt-5'>
                                                <Link href={"/belts"}><li className={listcss}>Belts</li></Link>
                                                <hr />
                                                <Link href={"/cummerbunds-and-bow-Ties"}><li className={listcss}>Cummerbunds & Bow Ties</li></Link>
                                                <hr />
                                                <Link href={"/ties-and-pocket-squares"}><li className={listcss}>Ties & Pocket</li></Link>
                                                <hr />
                                                <Link href={"/squares"}><li className={listcss}>Squares</li></Link>
                                                <hr />
                                                <Link href={"/socks"}><li className={listcss}>Socks</li></Link>
                                                <hr />
                                                <Link href={"/pocket-watches"}><li className={listcss}>Pocket Watches</li></Link>
                                                <hr />
                                                <Link href={"/card-Holders"}><li className={listcss}>Card Holders</li></Link>
                                                <hr />
                                                <Link href={"/suit-Bags"}><li className={listcss}>Suit Bags</li></Link>
                                                <hr />
                                            </ul>
                                        </AccordionItem>
                                        <AccordionItem className="text-white" key="Children" aria-label="Children" indicator={<ArrowDropDownIcon />} title={
                                            <p className={"text-sm"}>Children</p>
                                        }>
                                            <div className=""></div>
                                        </AccordionItem>
                                    </Accordion>
                                </AccordionItem>

                                <AccordionItem className="text-white" key="Appointment" aria-label="Appointment" indicator="" title={
                                    <Link href={"/appointment"}>
                                        <p className={mobNavlinkcss}>Appointment</p>
                                    </Link>
                                }>
                                </AccordionItem>

                                <AccordionItem className="text-white" key="The Fashion House" aria-label="The Fashion House" indicator="" title={
                                    <p className={mobNavlinkcss}>The Fashion House</p>
                                }>
                                </AccordionItem>
                                <AccordionItem className="text-white" key="Contact Us" aria-label="Contact Us" indicator="" title={
                                    <Link href={"/contact"}>
                                        <p className={mobNavlinkcss}>Contact Us</p>
                                    </Link>
                                }>
                                </AccordionItem>
                            </Accordion>
                        </div>


                    </div >

                </ div >
            )
            }
        </>
    );
}

export default Navbar;