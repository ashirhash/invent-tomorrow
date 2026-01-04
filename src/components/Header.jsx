import Image from 'next/image'
import React from 'react'
import Navbar from './ui/Navbar'

const Header = () => {
    return (
        <header>
            <div className="container-sm flex py-6 items-center justify-between">
                <a href="/" className=""><Image src='/images/logo.svg' width={247} height={40} alt='logo' /></a>
                <Navbar />
                <button type='button' className="group px-6 border text-white border-[#FFFFFF1A] bg-[#FFFFFF08] rounded-full text-sm font-bold transition hover:bg-accent-blue">
                    <span className="block border-b border-b-accent-blue py-4.5 leading-0 transition-colors group-hover:border-b-white">
                        Book Free Audit
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header