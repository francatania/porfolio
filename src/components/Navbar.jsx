import { useEffect, useState } from "react";

export function Navbar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth<=768);
    const [isOpen, setIsOpen] = useState(false);


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


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(()=>{
        console.log(isOpen)
    },[isOpen])

    

    return (
    <nav className={isScrolled && !isOpen ?"bg-darkBlue w-full h-[3rem] mb-[-1px] font-montserrat fixed z-50 transition duration-200" : "bg-oceanBlue  w-full h-[3rem] mb-[-1px] font-montserrat fixed z-50 transition duration-200" }>
        <div className="flex justify-around w-full sm:w-[70%] h-full m-auto text-whiteMag">

            {isMobile ? ( <>                    
                <div className="w-full h-full flex justify-start items-center pl-3">
                    <i className="fa-solid fa-bars hover:cursor-pointer" onClick={()=>{setIsOpen(true)}}></i>
                </div>
                
                <div className={`h-[100vh] ${isOpen ? 'w-1/2 left-0' :'w-0 left-[-100%]'} absolute bg-darkBlue overflow-hidden transition-all duration-200 flex flex-col gap-6 p-2 z-50`}>
                        <div className="flex items-center">
                            <i className="fa-solid fa-x hover:cursor-pointer" onClick={()=>{setIsOpen(false)}}></i>
                        </div>

                        <div className="flex items-center">
                            <a href="#inicio" onClick={()=>{setIsOpen(false)}}><h3>Inicio</h3></a>
                        </div>
                        <div className="flex items-center">
                            <a href="#tecn" onClick={()=>{setIsOpen(false)}}><h3>Tecnologías</h3></a>
                        </div>
                        <div className="flex items-center">
                            <a href="#educacion" onClick={()=>{setIsOpen(false)}}><h3>Educación</h3></a>
                        </div>
                        <div className="flex items-center">
                            <a href="#proyectos" onClick={()=>{setIsOpen(false)}}><h3>Proyectos</h3></a>
                        </div>
                        <div className="flex items-center">
                            <a href="#contacto"onClick={()=>{setIsOpen(false)}}><h3>Contacto</h3></a>
                        </div>

                </div>

                <div 
                    className={`w-[100%] h-[100vh] bg-[#302b27b2] absolute top-0 left-0 z-40 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                   
                ></div>

                
                </> ) : (
                <>                    
                <div className={`w-full  flex justify-between`}>
                    <div className="flex items-center">
                        <a href="#inicio"><h3>Inicio</h3></a>
                    </div>
                    <div className="flex items-center">
                        <a href="#tecn-web"><h3>Tecnologías</h3></a>
                    </div>
                    <div className="flex items-center">
                        <a href="#educacion-web"><h3>Educación</h3></a>
                    </div>
                    <div className="flex items-center">
                        <a href="#proyectos-web"><h3>Proyectos</h3></a>
                    </div>
                    <div className="flex items-center">
                        <a href="#contacto-web"><h3>Contacto</h3></a>
                    </div>

                </div>
                
                </> 
            )}

        </div>

        
    </nav>)
}