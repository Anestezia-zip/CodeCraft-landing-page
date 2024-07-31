import React from 'react'
import {features} from '../constants'

const Features = () => {
  return (
    <div id='features' className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className='text-center'>
            <span className='uppercase h-6 text-lg font-medium p-2'>features</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                Easily build{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    your code
                </span>
            </h2>
            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map((feature, i) => (
                    <div key={i} className='w-full sm:w-1/2 lg:w-1/3'>
                        <div className="flex">
                            <div className='flex mx-6 h-10 w-10 p-2 justify-center items-center rounded-full text-orange-700'>
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                                <p className='text-md p-2 mb-10'>{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features