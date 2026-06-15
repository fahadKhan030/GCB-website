import React from 'react'
import { useState } from 'react'

const Work = () => {
    
    const work = [
        {
            id : 1 ,
            title : "kitchen",
            category : "kitchen"
        },
        {
            id : 2 ,
            title : "room",
            category : "room"
        },
        {
            id : 3 ,
            title : "wall",
            category : "wall"
        },
        
    ]
    const [filterDesign, setFilterDesign] = useState(work)

    const items = (category)=>{
        const filterCategory = work.filter(
            (items)=>items.category === category
            
        );
        setFilterDesign(filterCategory)
    }

  return (
    <div>
        <div className='flex items-center justify-between lg:px-11 md:mt-20'>
            <div>
                <span className='text-primary text-xm'>Portfolio</span>
                <h1>Shaping the Skyline</h1>
            </div>
            <div className='flex gap-4'>
                <button className='border border-primary px-2 rounded-full hover:bg-primary hover:text-white duration-200  hover:cursor-pointer'>All</button>
                <button className='border border-primary px-2 rounded-full hover:bg-primary hover:text-white duration-200 hover:cursor-pointer'>Residential</button>
                <button className='border border-primary px-2 rounded-full hover:bg-primary hover:text-white duration-200 hover:cursor-pointer'>Commercial</button>
                <button className='border border-primary px-2 rounded-full hover:bg-primary hover:text-white duration-200 hover:cursor-pointer'>Infrastructure</button>

                
            </div>
        </div>
    </div>
  )
}

export default Work