import ProjectCard from "./ProjectCard.jsx";

import baboonWeb from '../../assets/projects/baboon_web.png';
import baboonMobile from '../../assets/projects/baboon_mobile.png';
import baboonMobile2 from '../../assets/projects/baboon_mobile_2.png';
import baboonMobile3 from '../../assets/projects/baboon_mobile_3.png';
import baboonMobile4 from '../../assets/projects/baboon_mobile_4.png';
import baboonMobile5 from '../../assets/projects/baboon_mobile_5.png';
import baboonMobile6 from '../../assets/projects/baboon_mobile_6.png';
import baboonMobile7 from '../../assets/projects/baboon_mobile_7.png';

import gestorWeb from '../../assets/projects/gestor_web.png';
import gestorMobile from '../../assets/projects/gestor_mobile.png';
import gestorMobile2 from '../../assets/projects/gestor_mobile_2.png';
import gestorMobile3 from '../../assets/projects/gestor_mobile_3.png';
import gestorMobile4 from '../../assets/projects/gestor_mobile_4.png';



const Project = () =>{
    const imgsBaboon =[baboonMobile, baboonMobile5, baboonMobile6, baboonMobile2, baboonWeb]
    const titleBaboon = "Baboon Clothes - Ecommerce";
    const techBaboon = "Tecnologías usadas: React, SASS, Firebase";
    const descriptionBaboon = "Proyecto e-commerce, productos por categoria, barra buscadora, carrito, responsive design.";
    const websiteBaboon = "https://baboonclothes.netlify.app/";

    const imgsGestor = [gestorMobile2, gestorMobile3, gestorMobile, gestorMobile4, gestorWeb];
    const titleGestor = "Gestor Gastos";
    const techGestor = "Tecnologías usadas: React, Tailwind CSS, Node JS, Express JS, Mongo DB";
    const descriptionGestor = "Gestor de Gastos con sistema de login, gastos, ingresos, multicidad de cuentas, transferencias entre cuentas y gráficos para análisis.";
    const websiteGestor = "https://mi-gestor-gastos.netlify.app/"

    return (<>
        <section className="bg-whiteMag w-full text-oceanBlue flex flex-col items-center mt-[-1px] mb-[-1px] pb-[1px]">
            <div className=" w-[70%] flex justify-center items-center h-[10%]">
                <h2 className="text-center text-3xl font-bold mb-8 ">Proyectos</h2>
            </div>
            <div className="flex flex-wrap w-full sm:w-[70%] h-[90%] justify-around gap-4">
                <ProjectCard arrayImgs = {imgsBaboon} title = {titleBaboon} tech = {techBaboon} description={descriptionBaboon} website={websiteBaboon}></ProjectCard>
                
                <ProjectCard arrayImgs = {imgsGestor} title = {titleGestor} tech = {techGestor} description={descriptionGestor} website={websiteGestor}></ProjectCard>
                
            </div>
        </section>
    </>)
}

export default Project;