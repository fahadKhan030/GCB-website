import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import next from "../../assets/nextbutton.png"
import back from "../../assets/backbutton.png"

const Testimonial = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    console.log(emblaApi);
    

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    const ClientFeedBack = [
        {
            id: 1,
            message: "Their commitment to sustainable building materials transformed our project from a standard development into an award-winning landmark.",
            name: "Saeed-UR-Rahman",
            Company: "Haroon real state"
        },
        {
            id: 2,
            message: "Their commitment to sustainable building materials transformed our project from a standard development into an award-winning landmark.",
            name: "Saeed-UR-Rahman",
            Company: "Haroon real state"
        },
        {
            id: 3,
            message: "Their commitment to sustainable building materials transformed our project from a standard development into an award-winning landmark.",
            name: "Saeed-UR-Rahman",
            Company: "Haroon real state"
        },
        {
            id: 4,
            message: "Their commitment to sustainable building materials transformed our project from a standard development into an award-winning landmark.",
            name: "Saeed-UR-Rahman",
            Company: "Haroon real state"
        },
        {
            id: 5,
            message: "Their commitment to sustainable building materials transformed our project from a standard development into an award-winning landmark.",
            name: "Saeed-UR-Rahman",
            Company: "Haroon real state"
        },
        {
            id: 6,
            message: "Their commitment to sustainable building materials transformed our project from a standard development into an award-winning landmark.",
            name: "Saeed-UR-Rahman",
            Company: "Haroon real state"
        },
        {
            id: 5,
            message: "Their commitment to sustainable building materials transformed our project from a standard development into an award-winning landmark.",
            name: "Saeed-UR-Rahman",
            Company: "Haroon real state"
        }

    ]


    return (
        <section className='mt-5 md:mt-12 '>
            <div className='text-center'>
                <span className='text-primary'>CLIENT FEEDBACK</span>
                <h1>What Industry Leader Say</h1>
            </div>

            <div className='embla py-5' >
                <div className='embla__viewport' ref={emblaRef}>
                    <div className='embla__container p-3'>
                        {
                            ClientFeedBack.map((data) => {
                                return <article key={data.id} className='embla__slide flex flex-col p-3 bg-white shadow-sm rounded-md'>
                                    <blockquote className='border-b-1 pb-3'>
                                        <p>
                                            {data.message}
                                        </p>
                                    </blockquote>
                                    <footer className=' flex items-center gap-2 mt-2'>
                                        <div className='h-10 w-10 bg-primary rounded-full'></div>
                                        <div>
                                            <cite className='font-semibold'>{data.name}</cite>
                                        <p className='text-gray-500'> CEO OF {data.Company}</p>
                                        </div>
                                    </footer>
                                </article>
                            })
                        }
                    </div>
                </div>

                <div className='flex items-center justify-center gap-2 mt-3'>
                    <button onClick={goToPrev} className='p-3 rounded-full border border-primary hover:cursor-pointer'>
                        <img src={back} alt="" />
                    </button>
                    <button onClick={goToNext} className='p-3 rounded-full border border-primary hover:cursor-pointer'>
                        <img src={next} alt="" />
                    </button>
                </div>



            </div>
        </section>
    )
}

export default Testimonial