import Image from 'next/image'
import React from 'react'

const WorkCard = ({ imgUrl = "", title = "", desc = "" }) => {
    return (
        <div className='py-8 px-10 rounded-3xl bg-[#FFFFFF08] border border-[#FFFFFF1A]'>
            {imgUrl && <Image className='mb-4' src={imgUrl} width={55} height={55} alt='work icon'/>}
            <h3 className='mb-4 text-white font-extrabold text-2xl'>{title}</h3>
            <p className='mb-4 font-bold text-accent-gray'>{desc}</p>
        </div>
    )
}

export default WorkCard