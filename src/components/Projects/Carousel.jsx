import React, { useState } from 'react';

const Carousel = ({ imgs }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((next) => (currentSlide === imgs.length - 1 ? next = 0 : next = currentSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (currentSlide === 0 ? prev = imgs.length - 1 : prev = currentSlide - 1));
    };
    return (<>
        <div className="relative overflow-hidden h-full">
            <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {imgs.map((img, index) => (
                    <div className="min-w-full h-full" key={index}>
                        <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            


    



            </div>
            
            <div className='absolute inset-0 flex items-center justify-between ' >
                <button onClick={prevSlide} className="w-[3rem] h-[3rem]  bg-white text-black p-2 rounded-full hover:bg-oceanBlue hover:text-whiteMag transition duration-200">{'<'}</button>
                <button onClick={nextSlide} className="w-[3rem] h-[3rem]  bg-white text-black p-2 rounded-full hover:bg-oceanBlue hover:text-whiteMag transition duration-200">{'>'}</button>
            </div>

            <div className='absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2' >
                {imgs.map((_, index) => (
                    <div key={index} className={`h-[1rem] w-[1rem] rounded-full transition ease-out  ${currentSlide == index ? 'bg-oceanBlue tranform scale-125' : 'bg-whiteMag'}`}></div>
                ))}
            </div>      
        </div>


    </>)
}

export default Carousel;