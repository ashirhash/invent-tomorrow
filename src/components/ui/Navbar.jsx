'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="relative border border-[#FFFFFF1A] bg-[#FFFFFF08] rounded-full py-3 lg:px-8 px-4">
            <div className="flex items-center justify-between">
                {/* Desktop nav */}
                <ul className="hidden lg:flex gap-8">
                    {['Solutions', 'Process', 'Differentiation', 'ROI'].map(item => (
                        <li
                            key={item}
                            className="text-white text-sm transition hover:text-accent-blue"
                        >
                            <Link href="/">{item}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden flex-col w-5 h-5 flex justify-center items-center gap-0.75"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`h-0.5 w-5 bg-white transition
              ${open && 'rotate-45 translate-y-1.25'}`}
                    />
                    <span
                        className={`h-0.5 w-5 bg-accent-blue transition
              ${open && 'opacity-0'}`}
                    />
                    <span
                        className={`h-0.5 w-5 bg-white transition
              ${open && '-rotate-45 -translate-y-1.25'}`}
                    />
                </button>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`lg:hidden absolute right-0 top-[calc(100%+8px)] rounded-2xl border border-[#FFFFFF1A] bg-[#0b0b0b] min-w-40 p-4 transition
          ${open ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-[.98]'}`}
            >
                <ul className="flex flex-col gap-4">
                    {['Solutions', 'Process', 'Differentiation', 'ROI'].map(item => (
                        <li key={item}>
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}
                                className="text-white text-sm transition hover:text-accent-blue"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="text-white text-sm transition hover:text-accent-blue"
                    >
                        Book free audit
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
