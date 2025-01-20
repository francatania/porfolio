import { useState } from 'react';
import Carousel from './Carousel.jsx';
import Swal from 'sweetalert2';

const ProjectCard = ({ title, arrayImgs, tech, description, website, videoUrl, repository }) => {
    const hasVideo = !!videoUrl; 
    const hasRepository = !!repository;
    const hasWebSite = !!website;

    const handleLinks = () =>{

        {hasRepository && !hasWebSite?
            Swal.fire({
                icon: "info",
                iconColor: "oceanBlue",
                html: repository
                  .map(
                    (r) => `
                     <a href="${r.repository}" target="_BLANK" class="underline text-darkBlue "><b><i class="fa-brands fa-github"></i> ${r.description} </b></a> 
                    <br>
                    <br>
                      
                    `
                  )
                  , 
                showCloseButton: true,
                customClass: {
                    confirmButton: "bg-darkBlue",
                    icon: "text-darkBlue"
                  }
              })
        :
        hasWebSite && !hasRepository?
              
        Swal.fire({
            icon: "info",
            iconColor: "oceanBlue",
            html:  `
                <a href="${website.website}" target="_BLANK" class="underline text-darkBlue "><b><i class="fa-solid fa-globe"></i> Visitar sitio web</b></a> 
                `
              
              , 
            showCloseButton: true,
            customClass: {
                confirmButton: "bg-darkBlue",
                icon: "text-darkBlue"
              }
          })

          :

          Swal.fire({
            icon: "info",
            iconColor: "oceanBlue",
            html: `
              ${repository
                .map(
                  (r) => `
                    <a href="${r.repository}" target="_BLANK" class="underline text-darkBlue " autofocus>
                      <b><i class="fa-brands fa-github"></i> ${r.description}</b>  
                    </a> 
                    <br>
                    <br>
                  `
                )
                .join('')} 
          
              <a href="${website.website}" target="_BLANK" class="underline text-darkBlue " autofocus>
                <b><i class="fa-solid fa-globe"></i> Visitar sitio web</b> 
              </a>
            `,
            showCloseButton: true,
            customClass: {
                confirmButton: "bg-darkBlue"
              }
          });
          
        }


    
    }

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


            <div className="w-full mt-auto p-2 flex justify-center">
                            <strong><button onClick={()=>handleLinks()}>Links <i class="fa-solid fa-arrow-up-right-from-square"></i></button></strong>
            </div>

               


        </article>
    );
};

export default ProjectCard;
