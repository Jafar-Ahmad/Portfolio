import React from 'react'
import { AiOutlineCode, AiOutlineBarChart, AiOutlineAntDesign } from 'react-icons/ai'

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 space-x-2">
        <div className="col-span-4 place-self-center">
        <h2 className='text-2xl font-sans font-bold text-left pb-2 '>What i offer</h2>
          <h1 className='text-teal-950 font-extrabold text-2xl font-sans text-left pb-2 '>My Services</h1>
        
        <div className='bg-teal-950 text-white rounded-lg shadow-lg p-4 place-content-center'>
           <AiOutlineCode size={40} className='ml-44 lg:ml-60' />
           <h2 className='font-semibold text-xl text-center font-sans pb-3'>Frontend Development</h2>
           <p className='justify-center text-lg font-mono text-center'>Ensuring website work seamlessly on various devices 
           and screen sizes, providind a consistent and user-friendly experience. 
           </p>
        </div>
        </div>

        <div className="col-span-4 place-self-center mt-8 lg:mt-20">
        <div className='bg-teal-950 text-white rounded-lg shadow-lg p-4'>
           <AiOutlineBarChart size={40} className='place-content-center ml-44 lg:ml-60' />
           <h2 className='font-semibold text-xl text-center font-sans pb-3'>Data Analysis</h2>
           <p className='justify-center text-lg font-mono text-center'>Provide expert services in data visualization,
           predictive modelling, and business intelligence. trnasform data and into actionable insights.
           </p>
        </div>
        </div>

        <div className="col-span-4 place-self-center mt-8 lg:mt-20">
        <div className='bg-teal-950 text-white rounded-lg shadow-lg p-4'>
           <AiOutlineAntDesign size={40} className='place-content-center ml-44 lg:ml-60' />
           <h2 className='font-semibold text-xl text-center font-sans pb-3'>Grapgic Design</h2>
           <p className='justify-center text-lg font-mono text-center'>Elevate your brand with custom graphic desing 
           services: logos, brochures, infographics, and more. bringing your vision to life.
           </p>
        </div>
        </div>

    </div>
  )
}

export default Services