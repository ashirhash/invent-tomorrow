import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import VideoPlayer from './ui/VideoPlayer'

const Banner = () => {
    return (
        <section className='lg:py-40 sm:py-20 py-10 flex'>
            <div className="container-sm gap-12 grid grid-cols-10 ">
                <div className="col-span-6 self-center">
                    <div className="mb-12">
                        <h2 className='mb-4 text-accent-blue uppercase text-sm tracking-widest'>Efficiency Engineering</h2>
                        <h1 className="text-8xl bg-linear-to-r font-bold from-white to-[#60A5FA] bg-clip-text text-transparent">
                            AI & AUTOMATION FOR 6-7 FIGURE BUSINESSES
                        </h1>
                    </div>
                    <div className="gap-5 justify-between items-center grid grid-cols-12">
                        <p className='text-accent-gray text-lg col-span-8 font-semibold'>We build custom automations and AI agents that
                            remove manual work, reduce tool chaos, and help
                            your team scale efficiently.</p>
                        <Link href='/' className='group col-span-4 flex gap-4 items-center'>
                            <span className=' justify-center items-center grow w-16 h-16 border rounded-full border-[#4B5563] flex gap-4 hover:bg-accent-blue transition-all duration-300'>
                                <Image className='group-hover:-rotate-45 transition' src='/images/next-arrow.svg' width={24} height={24} alt='arrow icon'></Image>
                            </span>
                            <span className='uppercase text-white text-sm tracking-wider'>Explore Solutions</span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-4 self-center">
                    <VideoPlayer />
                </div>
            </div>
        </section>
    )
}

export default Banner