

import Carousel from './Carousel.jsx'


const ProjectCard = ({title, arrayImgs, tech, description, website}) =>{
    

    return (<>
        <article className="w-[90%] sm:w-[45%] h-[40rem] border-2 rounded-[2rem] border-oceanBlue text-oceanBlue">
            <div className='h-[10%] flex justify-center items-center'>
                <h3 className='text-2xl'>{title}</h3>
            </div>
                
            <div className='w-full h-[70%]'>
                <Carousel imgs = {arrayImgs} ></Carousel>
            </div>
            <div className='w-full h-[10%] p-2'>
                <div className='h-1/2'>
                    <p>
                        {tech}
                    </p>
                </div>

                <div className='h-1/2 '>
                    <p>
                        {description}
                        <br></br>
                        <br></br>
                        <a href={website} target='_BLANK'>Visitar sitio web</a>
                    </p>
                </div>
            </div>
        </article>
    </>)
}

export default ProjectCard;