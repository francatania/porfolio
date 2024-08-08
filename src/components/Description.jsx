import image from '../assets/imagen_cv.jpg'

export default function Description(){
    return (
        <section className='w-full flex justify-around items-center m-auto pt-10 bg-oceanBlue'>
            <div className='w-[70%] flex flex-rows'>
                <div className='w-[70%] flex flex-col justify-center'>
                    <h2 className='text-whiteMag text-[3rem] text-center'>Franco Catania</h2>
                    <h3 className='text-whiteMag text-[2rem] text-center'>Desarrollador Full Stack</h3>
                    <div className='text-center text-whiteMag'>
                        <p>
                            Soy un joven profesional y estudiante apasionado de la tecnología con muchas ganas de aprender y aportar mis conocimientos.
                            Tengo experiencia con diversos lenguajes de programación, bases de datos SQL y no SQL y metodologías ágiles.
                        </p>
                    </div>

                </div>

                <div className=" h-[20rem]">
                    <img src={image} alt="CV" className="rounded-full w-full h-full object-cover" />
                </div>

            </div>

        </section>)
}

