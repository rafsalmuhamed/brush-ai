import React from 'react'
import { assets } from '../assets/assets'


const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 min-h-[75vh]'>

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm '>
      {/* image container */}
      <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
        {/* leftside image */}
        <div>
          <p className='font-semibold text-gray-600 mb-2'>Before</p>
          <img className='rounded-md border' src={assets.image_w_bg} alt="" />
        </div>
        {/* rightside image */}
        <div className='flex flex-col'>
          <p className='font-semibold text-gray-600 mb-2'>After</p>

          <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow:hidden'>
            < img className='' src={assets.image_wo_bg} alt="" />

            {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin '></div>

                </div> */}

          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
        <button className='px-8 py-2.5 text-indigo-500 text-sm border border-indigo-500 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
        <a className='px-8 py-2.5 text-white bg-gradient-to-r from-indigo-700 to-blue-500 rounded-full hover:scale-105 transition-all duration-700' href="">Download</a>

      </div>
</div>

    </div>


  )
}

export default Result