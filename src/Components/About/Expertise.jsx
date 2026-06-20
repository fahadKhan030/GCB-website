import React from 'react'
import arc from "../../assets/arc.svg"
import civil from "../../assets/pro.svg"
import project from "../../assets/pro.svg"
import land from "../../assets/land.svg"
import ren from "../../assets/ren.svg"
import com from "../../assets/com.svg"


const Expertise = () => {
    const expertise = [
        {
            img: arc,
            title: "Architectural Design",
            dis: "Innovative and sustainable blueprints that harmonize with natural surroundings."
        },
        {
            img: civil,
            title: "Civil Enginners",
            dis: "Structural integrity and precision engineering for long-lasting infrastructure."
        },
        {
            img: project,
            title: "Project Consultancy",
            dis: "Expert guidance on ESG targets, budgeting, and project management."
        },
        {
            img: land,
            title: "Land Surveying",
            dis: "Advanced topographical mapping and site analysis for accurate planning."
        },
        {
            img: ren,
            title: "Renovation and Restoration",
            dis: "Revitalizing existing structures with modern green technologies."
        },
        {
            img: com,
            title: "Commercial Development",
            dis: "High-performance office and retail spaces designed for the future."
        },




    ]
    return (
        <section>
            <div className='mx-auto text-center p-0 lg:p-10'>
                <span className='text-primary'> OUR EXPERTISE</span>
                <h1>Specialized Engineering & Construction Services</h1>
                <p className=''>From conceptual drafting to final handover, we provide end-to-end solutions tailored to the unique landscape of Swat and across Pakistan.</p>
            </div>

            <div className='grid grid-cols-3 gap-4 '>
                {
                    expertise.map((data) => {
                        return <article className='bg-white  rounded-2xl p-5 border border-primary'>
                            
                                <img src={data.img} alt="" className='p-3 bg-gray-200 rounded-xl' />
                            
                            <h4 className='font-semibold lg:text-xl text-md my-2'>{data.title}</h4>
                                <p className='max-w-[300px]'>{data.dis}</p>
                        </article>
                    })
                }
            </div>

        </section>
    )
}

export default Expertise