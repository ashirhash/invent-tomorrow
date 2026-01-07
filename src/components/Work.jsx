import React from 'react'
import WorkCard from './ui/WorkCard'
import FerrisWheel from './ui/FerrisWheel'

const Work = ({ services = [] }) => {
    return (
        <section className='lg:pb-40 sm:pb-30 pb-28 '>
            <div className="container-lg lg:grid lg:grid-cols-14 flex flex-col-reverse xl:gap-20 sm:gap-10 gap-6">
                <div className="lg:col-span-8 lg:mt-20 mt-10 sm:ml-10">
                    <FerrisWheel />
                </div>
                <div className="lg:col-span-6">
                    <h2 className='text-white 2xl:text-6xl lg:text-5xl sm:text-4xl text-3xl lg::mb-8 mb-5 font-extrabold leading-[1.15] '>Optimize Team <span className='text-accent-blue'>Workflows</span></h2>
                    <p className='text-accent-gray font-semibold xl:text-lg sm:text-base text-sm sm:leading-none leading-tight xl:mb-23.75 lg:mb-16 sm:mb-10 mb-8'>Use AI and Automations to empower your business teams, increase conversions, and scale efficiently.</p>
                    <div className="flex flex-col xl:gap-24 lg::gap-16 sm:gap-8 gap-6">
                        {services.map(service => <WorkCard {...service} key={service.key} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work