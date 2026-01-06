import React from 'react'
import WorkCard from './ui/WorkCard'
import FerrisWheel from './ui/FerrisWheel'

const Work = ({ services = [] }) => {
    return (
        <section className='lg:pb-40 sm:pb-20 pb-10'>
            <div className="container grid grid-cols-14 gap-20">
                <div className="col-span-8 mt-20">
                    <FerrisWheel />
                </div>
                <div className="col-span-6">
                    <h2 className='text-white text-6xl mb-8 font-extrabold leading-[1.15] '>Optimize Team <span className='text-accent-blue '>Workflows</span></h2>
                    <p className='text-accent-gray font-semibold text-lg leading-none mb-23.75'>Use AI and Automations to empower your business teams, increase conversions, and scale efficiently.</p>
                    <div className="flex flex-col gap-24">
                        {services.map(service => <WorkCard {...service} key={service.key} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work