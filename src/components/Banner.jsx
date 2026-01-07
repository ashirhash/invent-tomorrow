import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import VideoPlayer from './ui/VideoPlayer'

const Banner = () => {
    return (
        <section className='lg:py-40 sm:py-20 max-sm:pb-20 max-sm:pt-8 flex'>
            <div className="container-sm sm:gap-12 gap-6 grid lg:grid-cols-10 grid-cols-1 ">
                <div className="lg:col-span-6 self-center">
                    <div className="sm:mb-12 mb-5">
                        <h2 className='mb-4 text-accent-blue uppercase sm:text-sm text-xs tracking-widest'>Efficiency Engineering</h2>
                        <h1 className="2xl:text-8xl xl:text-7xl md:text-6xl sm:text-5xl text-4xl bg-linear-to-r font-bold from-white to-[#60A5FA] bg-clip-text text-transparent">
                            AI & AUTOMATION FOR 6-7 FIGURE BUSINESSES
                        </h1>
                    </div>
                    <div className="sm:gap-5 gap-4 justify-between items-center  grid sm:grid-cols-12 grid-cols-1">
                        <p className='text-accent-gray xl:text-lg lg:text-base text-sm sm:col-span-8 font-semibold'>We build custom automations and AI agents that
                            remove manual work, reduce tool chaos, and help
                            your team scale efficiently.</p>
                        <Link href='/' className='group sm:col-span-4 flex gap-4 items-center'>
                            <span className=' justify-center items-center shrink-0 xl:w-16 xl:h-16 sm:h-14 h-12 sm:w-14 w-12 border rounded-full border-[#4B5563] flex gap-4 hover:bg-accent-blue transition-all duration-300'>
                                <Image className='group-hover:-rotate-45 transition' src='/images/next-arrow.svg' width={24} height={24} alt='arrow icon'></Image>
                            </span>
                            <span className='uppercase text-white sm:text-sm text-xs tracking-wider'>Explore Solutions</span>
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-4 self-center">
                    <VideoPlayer />
                </div>
            </div>
        </section>
    )
}

export default Banner