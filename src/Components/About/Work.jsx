import React from 'react'
import { useState } from 'react'

const Work = () => {

    
    const work = [
        {
            id : 1 ,
            img: "https://i.pinimg.com/1200x/77/b8/97/77b897abb35a4b0058bb40265fc52866.jpg",
            title : "kitchen",
            category : "kitchen"
        },
        {
            id : 2 ,
            img: "https://i.pinimg.com/736x/6b/5a/cf/6b5acf9c52232168705f0d4a0bc1a378.jpg",
            title : "room",
            category : "room"
        },
        {
            id : 3 ,
            img: "",
            title : "hotal design",
            category : "house"
        },
         {
            id : 4 ,
            img: "https://i.pinimg.com/736x/97/e8/8f/97e88f563e1e4f8e3d8add4b5335a941.jpg",
            title : "House design",
            category : "house"
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
    <section>
        <div className='flex items-center justify-between mt-10 md:mt-16'>
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
        <div>
            
        </div>
    </section>
  )
}

export default Work