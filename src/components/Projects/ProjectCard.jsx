import { useState } from 'react';
import Carousel from './Carousel.jsx';

const ProjectCard = ({ title, arrayImgs, tech, description, website, videoUrl, repository }) => {
    const hasVideo = !!videoUrl; 
    const hasRepository = !!repository;

    return (
        <article className="w-[90%] sm:w-[45%] h-[40rem] border-2 rounded-[2rem] border-oceanBlue text-oceanBlue flex flex-col">
            <div className="h-[10%] flex justify-center items-center">
                <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
            </div>

            <div className="w-full h-[60%] flex justify-center items-center p-2">
                {hasVideo ? (

                    <iframe
                        className="w-full h-full rounded-[1rem]"
                        src={videoUrl}
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (

                    <Carousel imgs={arrayImgs} />
                )}
            </div>

            <div className="w-full flex-grow p-2 flex flex-col">
                <div className="flex">
                    <p><strong>Tecnologías usadas: </strong>{tech}</p>
                </div>
                <div className="flex">
                    <p><strong>Descripción: </strong>{description}</p>
                </div>
            </div>

               {hasRepository ? 
                    <div className="mt-auto p-2">
                           <a
                               href={repository}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="w-full block text-center p-2"
                           >
                               Visitar repositorio
                           </a>
                       </div>
               
               : 
               <div className="mt-auto p-2">
               <a
                   href={website}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full block text-center p-2"
               >
                   Visitar sitio web
               </a>
           </div>
               }

        </article>
    );
};

export default ProjectCard;
