import Carousel from './Carousel.jsx'

const ProjectCard = ({title, arrayImgs, tech, description, website}) => {
    return (
        <article className="w-[90%] sm:w-[45%] h-[40rem] border-2 rounded-[2rem] border-oceanBlue text-oceanBlue flex flex-col">
            <div className='h-[10%] flex justify-center items-center'>
                <h3 className='text-xl font-bold sm:text-2xl'>{title}</h3>
            </div>
                
            <div className='w-full h-[60%]'>
                <Carousel imgs={arrayImgs} />
            </div>

            <div className='w-full flex-grow p-2 flex flex-col'>
                <div className='flex'>
                    <p>{tech}</p>
                </div>
                <div className='flex'>               
                    <p>{description}</p>                   
                </div>
            </div>

            <div className='mt-auto p-2'>
                <a href={website} target='_blank' className='w-full block text-center p-2 '>
                    Visitar sitio web
                </a>
            </div>
        </article>
    )
}

export default ProjectCard;
