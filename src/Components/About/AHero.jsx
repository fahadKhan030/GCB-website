import React from 'react'

const AHero = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-around justify-around md:items
     items-center w-full mt-5 md:mt-12'>
      <div>
        <div className='max-w-[600px]'>
          <span className='bg-secondary text-white rounded-2xl text-sm px-2 py-1'>OUR STORY</span>
        <h1>Pioneering Sustainability in Modern Construction. </h1>
        <p className='text-gray-500 my-5'>Founded on the principles of ecological integrity and engineering excellence, Green Consultants & Builders bridge the gap between architectural ambition and environmental responsibility.</p>
        </div>
        <div className='flex items-center  gap-10'>
          <article className='border-l-3 p-3 border-primary '>
            <h5 className='text-md font-semibold'>OUR MISSION</h5>
            <p className='text-sm text-gray-500 max-w-[300px]'>To design and build structures that breathe with the environment, not against it.</p>
          </article>
          <article className='border-l-3 p-3 border-primary '>
            <h5 className='text-md font-semibold'>Our Vision</h5>
            <p className='text-sm text-gray-500 max-w-[300px]'>A world where every skyscraper is a vertical forest and every home is net-zero.</p>
          </article>
        </div>
      </div>

      <div>
        <img src="https://i.pinimg.com/736x/79/17/b7/7917b7403737be5ada6890fae7d7002f.jpg" className='rounded-2xl' alt="" />
      </div>

    </div>
  )
}

export default AHero