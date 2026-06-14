import React from 'react'

const OurProsess = () => {
  
    const OurProsess = [
        {
            no : 1,
            headline : "Discovery",
            title : "initial Consultantion",
            dis : "Understanding your vision, requirements, and site potential through strategic dialogue." 
        },
        {
            no : 2,
            headline : "Architecture",
            title : "Planning & Design",
            dis : "Creating detailed architectural blueprints and engineering plans with technical precision." 
        },
        {
            no : 3,
            headline : "Build",
            title : "Execution & Construction",
            dis : "Professional management and high-quality construction using innovative sustainable methods."
        },
        {
            no : 4 ,
            headline : "Delivery",
            title : "Final Handover",
            dis : "Rigorous quality checks and final assessments to deliver your completed project on time."
        }
    ]

  return (
    <div className='mx-auto flex flex-col mt-10  p-2 md:p-5 lg:p-10'>
        <div className='text-center'>
            <span className='text-primary'>OUR METHODOLOGY</span>
            <h1>Our Proven Process</h1>
            <p>A systematic approach to delivering engineering and construction excellence from concept to completion.</p>
        </div>
        <div className='grid grid-cols-4 gap-20   mt-10  '>
        
     {
        OurProsess.map((data) =>
            <article className=' rounded-md text-center flex items-center justify-center flex-col'>
                <h5 className='h-10 w-10 text-2xl border-2 border-primary flex items-center justify-center rounded-full'>
                    {data.no}
                </h5>
                <div className='bg-gray-50 border-secondary border rounded-md p-2  mt-4'>
                    <span className='text-secondary text-sm'>{data.headline}</span>
                    <h4 className='text-xl mb-2'>{data.title}</h4>
                    <p>{data.dis}</p>
                </div>
            </article>
         )
     }
        </div>
    </div>
  )
}

export default OurProsess