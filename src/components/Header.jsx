import Image from 'next/image'
import React from 'react'
import Navbar from './ui/Navbar'

const Header = () => {
    return (
        <header>
            <div className="container-sm flex sm:py-6 py-3 items-center justify-between">
                <a href="/" className=""><Image className='xl:w-[247px] w-[200px]' src='/images/logo.svg' width={247} height={40} alt='logo' /></a>
                <Navbar />
                <button className="relative max-lg:hidden overflow-hidden group px-6 border text-white border-[#FFFFFF1A] bg-transparent rounded-full text-sm font-bold transition">
                    <span className="relative z-10 block py-4.5 leading-0 transition-colors">
                        Book Free Audit
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-accent-blue transition-all duration-500 ease-none group-hover:h-full"></span>
                </button>

            </div>
        </header>
    )
}

export default Header