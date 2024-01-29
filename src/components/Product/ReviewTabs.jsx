"use client"
import React from 'react'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";


const ReviewTabs = () => {
    const licss = "text-[14px]"
    return (
        <div className=''>
            <Tabs className='overflow-hidden  REVIEWTABS' aria-label="Options">
                <Tab key="Details"
                    title={
                        <div className=" shadow-lg rounded-md flex justify-start py-[8px]">
                            <span className="text-[16px] font-[500]">Details</span>
                        </div>
                    }>
                    <Card>
                        <CardBody className="border px-10">
                            <div className='my-4'>
                                <h3 className='text-sm lg:text-[20px] my-3'>Jacket Details</h3>
                                <ol className='list-decimal'>
                                    <li className={licss}>Single breasted jacket with one luxury button</li>
                                    <li className={licss}>Double layered peak lapels: the navy satin lapel features a patterned border that matches the waistcoat and cravat and it can be removed to reveal the solid navy bottom lapel</li>
                                    <li className={licss}>Lightweight half canvas interlining</li>
                                    <li className={licss}>Navy lining panel with gold details</li>
                                    <li className={licss}>Double vent</li>
                                    <li className={licss}>One breast pocket and two straight side pockets with flaps</li>
                                    <li className={licss}>Three inside pockets, one of which is sized for business cards</li>
                                </ol>
                            </div>
                            <div className='my-4'>
                                <h3 className='text-[20px] my-3'>Waistcoat Details</h3>
                                <ol className='list-decimal'>
                                    <li className={licss}>Navy patterned front and lightweight navy back</li>
                                    <li className={licss}>Shawl lapels with satin borders</li>
                                    <li className={licss}>Double breasted with four pairs of luxury buttons</li>

                                    <li className={licss}>Adjustable signature buckle fastener</li>
                                </ol>
                            </div>
                            <div className='my-4'>
                                <h3 className='text-[20px] my-3'>Trouser Details</h3>
                                <ol className='list-decimal'>
                                    <li className={licss}>Solid navy colour</li>
                                    <li className={licss}>Belt loops</li>
                                    <li className={licss}>Waistband featuring a rubberised grip insert to keep your shirt in place</li>
                                    <li className={licss}> A zip, a metal hook and eye and a button secure your trousers in place</li>
                                    <li className={licss}> Two front and two back pockets
                                        Unfinished hem for length adjustment</li>
                                </ol>

                            </div>
                            <p className={licss}> This 3 piece navy suit comes with a navy patterned cravat, made from the same fabric as the waistcoat, and a cravat pin</p>
                        </CardBody>
                    </Card>
                </Tab >
                <Tab className="overflow-hidden" key="Size&fit"
                    title={
                        <div className=" shadow-lg rounded-md flex justify-start py-[8px]">
                            <span className="text-[16px] font-[500]">Size & Fit</span>
                        </div>
                    }            >
                    <Card>
                        <CardBody className="border">
                            <div className='px-10'>
                                <ul className='list-disc'>
                                    <li className={licss}>Tailored slim fit. If you’re between sizes, we suggest going one size up.
                                    </li>
                                    <li className={licss}>Trousers measure 6″ less on the waist. E.g., for a suit size 40, the jacket and waistcoat come with a 40″ chest and the trousers measure 34″ on the waist.
                                    </li>
                                    <li className={licss}> The trousers’ hem is unfinished*, for length adjustment.
                                        There’s fabric allowance, in case alterations are needed.
                                    </li>
                                    <li className={licss}> Consult the table below for your suit size or use our size recommendation tool.</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab className="overflow-hidden" key="CareTips"
                    title={
                        <div className=" shadow-lg rounded-md flex justify-start py-[8px]">
                            <span className="text-[16px] font-[500]">Care & Tips</span>
                        </div>
                    }>
                    <Card>
                        <CardBody className="px-10 border">
                            <div className='my-4'>
                                <h3 className='text-[20px] my-3'>Fabric Composition:</h3>
                                <ul className='list-disc'>
                                    <li className={licss}>45% Wool – Lightweight, breathable comfort</li>
                                    <li className={licss}> 35% Viscose – Luxurious sheen and silky smoothness</li>
                                    <li className={licss}>0% Microfiber – Fabric blend and improved durability</li>
                                </ul>
                            </div>
                            <div className='my-4'>
                                <h3 className='text-[20px] my-3'>Lining Composition:</h3>
                                <ul className='list-disc'>
                                    <li className={licss}>100% Viscose – Absorbing and skin friendly</li>
                                </ul>
                            </div>
                            <div className='my-4'>
                                <h3 className='text-[20px] my-3'>Care Instructions:</h3>
                                <ul className='list-disc'>
                                    <li className={licss}>Do not wash</li>
                                    <li className={licss}>Do not bleach</li>
                                    <li className={licss}>Do not tumble dry</li>
                                    <li className={licss}>Iron at medium temperature (max 150°C)</li>
                                    <li className={licss}>Delicate dry cleaning, any solvent except trichloroethylene</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs >
        </div>
    )
}

export default ReviewTabs