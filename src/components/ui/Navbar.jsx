import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="border border-[#FFFFFF1A] bg-[#FFFFFF08] rounded-full py-3 px-8">
            <ul className='flex gap-8'>
                <li className='text-white text-sm transition hover:underline'><Link href="/">Solutions</Link></li>
                <li className='text-white text-sm transition hover:underline'><Link href="/">Process</Link></li>
                <li className='text-white text-sm transition hover:underline'><Link href="/">Differentiation</Link></li>
                <li className='text-white text-sm transition hover:underline'><Link href="/">ROI</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar