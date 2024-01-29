"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/Logo";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import SearchIc from "@/assets/SearchIcon";
import CartIcon from "@/assets/CartIcon";

function Navbar() {
    const [toggle, settoggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const Toggle = () => {
        settoggle(!toggle);
    };
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
    }, [isSticky])

    const navlinkcss =
        " text-[15px] text-white hover:text-yellow-500 cursor-pointer";
    const mobNavlinkcss =
        "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";
    const listcss = "text-[14px] my-[3px] text-black cursor-pointer hover:relative left-1 transition-all linear-ease hover:text-yellow-600"
    return (
        <>
            <nav className="relative">
                <div className={isSticky ? 'fixed bg-[#0a1a3c] flex  shadow-md  w-full z-[60] flex-row justify-between xl:px-[8%] 2xl:px-[10%] items-center md:py-0 py-2 px-[25px]' : 'flex bg-[#0a1a3c] shadow-md  w-full z-[60] flex-row justify-between xl:px-[8%] 2xl:px-[10%] items-center  py-3 px-[25px]'}>
                    <Link href={"/"}>
                        <Logo className={"md:h-[60px] md:w-full w-36"} />
                    </Link>
                    <div className="flex-row flex h-full gap-x-5">
                        <ul className="flex-row lg:flex hidden items-center gap-x-[40px]">
                            <li className={navlinkcss + "relative py-[10px] lg:py-[40px] h-full cursor-pointer NAVSHOP"}>
                                Shop
                                <div className="absolute z-[5] shadow-md overflow-hidden bg-white flex flex-row justify-around top-[110px] mx-[25px] xl:mx-[8%] 2xl:mx-[10%] py-6 h-[300px] inset-0">
                                    <div className='flex flex-col'>
                                        <h3 className='text-[15px] text-black font-medium '>Suits</h3>
                                        <ul className='flex flex-col gap-y-1'>
                                            <li className={listcss}>Wedding Suits</li>
                                            <li className={listcss}>Tuxedos & Dinner Suits</li>
                                            <li className={listcss}>Morning Suits & Tailcoats</li>
                                            <li className={listcss}>Nehru Suits</li>
                                            <li className={listcss}>Business & Lounge Suits</li>
                                            <li className={listcss}>Prom Suits</li>
                                            <li className={listcss}>Graduation Suits</li>
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
                                    <p className={`${listcss} hover:bg-slate-100`}>Our Story</p>
                                    <Link href={"/blog"} className={`${listcss} hover:bg-slate-100`}>The Gentlemen's Blog</Link>
                                </div>
                            </li>
                            <li className={`${navlinkcss}`}>
                                <Link className="okay relative" href={"/contact"}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <div className="flex flex-row items-center gap-x-3 md:gap-x-5">
                            <SearchIc />
                            <Link href={"/cart"}>
                                <CartIcon />
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
                    className="p-10 z-50 pl-10 fixed duration-1000 delay-300 ease-in-out pt-36 bg-white w-[100vw] h-[100vh]"
                >
                    <div className="">
                        <div className="lg:hidden block">
                            <ul className="flex flex-col gap-4">
                                <li className={mobNavlinkcss}>
                                    <Link href={"/products"}>
                                        Shop
                                    </Link>
                                </li>
                                <li className={mobNavlinkcss}>
                                    <Link href={"/appointment"}>
                                        Appointment
                                    </Link>
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    About Us
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    <Link href={"/contact"}>
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                </li>
                            </ul>
                        </div>


                    </div >

                </ div>
            )
            }
        </>
    );
}

export default Navbar;