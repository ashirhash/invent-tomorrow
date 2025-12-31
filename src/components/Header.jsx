import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Navbar from './ui/Navbar'

const Header = () => {
    return (
        <header>
            <div className="container-sm flex py-6 items-center justify-between">
                <a href="/" className=""><Image src='/images/logo.svg' width={247} height={40} alt='logo' /></a>
                <Navbar />
                <Button className="group px-6 border border-[#FFFFFF1A] bg-[#FFFFFF08] rounded-full text-sm font-bold py-4.5 transition hover:bg-accent-blue">
                    <span className="block border-b border-b-accent-blue py-4.5 leading-0 transition-colors group-hover:border-b-white">
                        Book Free Audit
                    </span>
                </Button>
            </div>
        </header>
    )
}

export default Header