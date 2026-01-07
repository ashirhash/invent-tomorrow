import Image from 'next/image'
import React from 'react'

const WorkCard = ({ imgUrl = "", title = "", desc = "" }) => {
    return (
        <div className='xl:py-8 w-full sm:py-5 xl:px-10 sm:px-6 max-sm:p-4 rounded-3xl bg-[#FFFFFF08] border border-[#FFFFFF1A]'>
            {imgUrl && <Image className='mb-4 xl:w-13.75 xl:h-13.75 w-10 h-10' src={imgUrl} width={55} height={55} alt='work icon'/>}
            <h3 className='sm:mb-4 mb-3 text-white font-extrabold xl:text-2xl text-xl'>{title}</h3>
            <p className='mb-4 xl:text-base sm:text-sm text-xs font-bold text-accent-gray'>{desc}</p>
        </div>
    )
}

export default WorkCard