import image from '../assets/imagen_cv.jpg'
import { useState, useEffect, useRef  } from 'react'

export default function Description(){
    const [isMobile, setIsMobile] = useState(window.innerWidth<=768);
    const imageContainerRef = useRef(null);

    useEffect(()=>{
        const handleResize = () =>{
            const width = window.innerWidth
            if(width >= 768){
                setIsMobile(false)
            }else{
                setIsMobile(true)
            }
        }
        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {window.removeEventListener("resize", handleResize)}
    },[])

    useEffect(() => {
        if (imageContainerRef.current) {
            imageContainerRef.current.classList.add('active');
        }
    }, []);

    useEffect(() => {
        if (imageContainerRef.current) {
            imageContainerRef.current.classList.add('active');
        }
    }, [isMobile]);

    return (
        <section id='inicio' className='w-full flex  justify-around items-center m-auto pt-10 bg-oceanBlue'>
            <div className='w-[90%] sm:w-[70%] flex flex-col sm:flex-row'>

                <div className={`w-full sm:w-[70%] flex flex-col justify-center ${isMobile ? 'order-2' : 'order-1'}`}>
                    <h2 className={`text-whiteMag  text-center ${isMobile ? 'text-[2rem]' : 'text-[3rem]'}`}>Franco Catania</h2>
                    <h3 className={`text-whiteMag  text-center ${isMobile ? 'text-[1.5rem]' : 'text-[2rem]'}`}>Desarrollador Full Stack</h3>
                    <div className={`text-center text-whiteMag ${isMobile ? 'text-[1rem] pt-[4px]' : ''}`}>
                        <p>
                            Soy un joven profesional y estudiante apasionado de la tecnología con muchas ganas de aprender y aportar mis conocimientos.
                            Tengo experiencia con diversos lenguajes de programación, bases de datos SQL y no SQL y metodologías ágiles.
                        </p>
                    </div>

                </div>

                <div 
                    ref={imageContainerRef} 
                    className={`right-container h-[25rem] p-6 sm:p-0 sm:h-[20rem] ${isMobile ? 'order-1' : 'order-2'} flex flex-col justify-center`}
                >
                    <img src={image} alt="CV" className="animate-right rounded-full w-full h-full object-cover" />
                </div>
            </div>

        </section>)
}

