import React from 'react'

const About = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h2 className='text-2xl font-sans font-bold text-left pb-3 '>Discover</h2>
          <h1 className='text-teal-950 font-extrabold text-2xl font-sans text-left pb-3 '>About  Me</h1>
        
      <p className="text-justify text-lg sm:text-xl font-thin mb-6 lg:pr-12 text-teal-950">
            I'm Jafar Ahmad a FrontEnd Developer, Data Analyst and Graphic Designer based in Damaturu, 
            Yobe State Nigeria. With 4+ years working experience. As a multifeceted professional, I combine FrontEnddevelopment,
            Data Analysis and Grapgic Design to deliver innovative solutions, driving engagement, insights, and business growth
            through responsuve interfaces, data-driven insights, and visually stunning designs.
          </p>
          </div>
          <div className="col-span-5 mt-8">
          <div className="text-left ">
            <h1 className='text-teal-950 text-3xl font-sans font-bold text-left'>My Skills</h1>
            <div className='flex justify-around pt-4'>
              <div>
              <ul className='list-disc text-lg font-serif font-semibold'>
                <li className=''>HTML </li>
                <li>CSS </li>
                <li>JavaScrfipt</li>
              </ul>
              </div>
              <div>
              <ul className='list-disc text-lg font-serif font-semibold'>
                <li>Next JS
                </li>
                <li>Tailwind CSS
                </li>
                <li>Excel
                </li>
              </ul>
              </div>
              <div>
              <ul className='list-disc text-lg font-serif font-semibold'>
                <li>SQL
                </li>
                <li>PowerBI
                </li>
                <li>Figma
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About