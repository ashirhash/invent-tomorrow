import React from 'react'

const Process = () => {
    return (
        <section>
            <div className="container-sm">
                <div className="mb-32">
                    <h2 className='mb-3 text-accent-blue uppercase text-sm tracking-widest text-center'>
                        Evolutionary Steps
                    </h2>
                    <h1 className="text-7xl font-black text-white text-center mb-16">
                        Our Proven Process
                    </h1>

                    <div className="flex justify-center items-start space-x-16 relative">
                        {/* Dotted line */}
                        <div className="absolute h-[1px] w-4/5 mx-auto top-10 left-0 right-0 z-0 bg-dashed"></div>

                        {/* Step 1 */}
                        <div className="flex flex-col items-center z-10">
                            <div className="w-20 h-20 bg-gray-800 rounded-full flex justify-center items-center mb-4">
                                {/* Icon/Image placeholder */}
                                <img src="/path/to/icon1.png" alt="System Breakdown" className="w-10 h-10" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2 text-center">System Breakdown</h3>
                            <p className="text-gray-400 text-center max-w-xs">
                                We break down your process step by step to create a clear automation plan
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center z-10">
                            <div className="w-20 h-20 bg-gray-800 rounded-full flex justify-center items-center mb-4">
                                {/* Icon/Image placeholder */}
                                <img src="/path/to/icon2.png" alt="Build Phase" className="w-10 h-10" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2 text-center">Build Phase</h3>
                            <p className="text-gray-400 text-center max-w-xs">
                                We build the AI automation workflow exactly as planned. You check it and approve.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center z-10">
                            <div className="w-20 h-20 bg-gray-800 rounded-full flex justify-center items-center mb-4">
                                {/* Icon/Image placeholder */}
                                <img src="/path/to/icon3.png" alt="Check and Run" className="w-10 h-10" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2 text-center">Check and Run</h3>
                            <p className="text-gray-400 text-center max-w-xs">
                                We run a final check to ensure it's ready. Then it goes into your system.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Process