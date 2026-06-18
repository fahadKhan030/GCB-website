import React from 'react'
import inno from "../../assets/inno.png"
import int from "../../assets/inte.png"
import sus from "../../assets/sus.png"
import exc from "../../assets/exce.png"

const AboutCompany = () => {
    const OverView = [
        {
            number: 25,
            title: "Years Experience"
        },
        {
            number: 200,
            title: "Projects Completed"
        },
        {
            number: 50,
            title: "Award-Winning design"
        }
    ]

    const card = [
        {
            icon: inno,
            heading: "Innovation",
            about: "Pushing boundaries with smart materials and green tech."
        },
        {
            icon: int,
            heading: "Integrity",
            about: "Transparent processes and ethical engineering standards."
        },
        {
            icon: sus,
            heading: "Sustainability",
            about: "Transparent processes and ethical engineering standards."
        },
        {
            icon: exc,
            heading: "Excellence",
            about: "Uncompromising quality in every brick and blueprint."
        },
    ]


    return (
        <div className='flex flex-col gap-3 md:gap-0 md:flex-row md:justify-around justify-around md:items
     items-center w-full mt-5 md:mt-12 '>
            <div className='max-w-[600px] md:hidden lg:block'>
                <span className='text-primary'>COMPANY OVERVIEW</span>
                <h1>Building a Greener Future Since 2008.</h1>
                <p className='my-4'>Established in 2008, Green Consultants & Builders has grown into a premier engineering firm specializing in sustainable construction across Pakistan. From the rugged peaks of Swat to the urban centers of Karachi, we deliver excellence through ecological integrity.</p>
                <div className='grid grid-cols-2 gap-2'>
                    {

                        OverView.map((items) => {
                            return <article>
                                <h3 className='text-primary font-semibold'>{items.number}+</h3>
                                <p>{items.title}</p>
                            </article>
                        })
                    }
                </div>
            </div>
            <div className='grid  grid-cols-2  gap-2 md:gap-4 mt-7 md:mt-0 lg:gap-10 max-w-[600px]'>
                {
                    card.map((card) => {
                        return <article className='p-3 md:p-5 border border-primary rounded-3xl'>
                            <img src={card.icon} alt="" />
                            <h3 className='my-2 font-semibold'>{card.heading}</h3>
                            <p>{card.about}</p>
                        </article>
                    })
                }
            </div>
        </div>
    )
}

export default AboutCompany