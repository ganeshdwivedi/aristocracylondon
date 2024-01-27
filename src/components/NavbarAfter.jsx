import React from 'react'

const NavbarAfter = ({ heading, subheading }) => {
    return (
        <div className="bg-cover relative bg-no-repeat h-[200px] bg-[url('https://www.aristocracy.london/wp-content/uploads/2023/11/title-bar-4.jpg')]">
            <div className='text-white absolute inset-0 bg-black bg-opacity-35 justify-center items-center flex flex-col'>
                <h3 className='text-[38px] text-center'>{heading}</h3>
                <p>{subheading}</p>
            </div>
        </div>
    )
}

export default NavbarAfter