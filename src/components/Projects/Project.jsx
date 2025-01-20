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
    const techBaboon = "React, SASS, Firebase.";
    const descriptionBaboon = "Proyecto e-commerce, productos por categoria, barra buscadora, carrito, responsive design.";
    const websiteBaboon = {website:'https://baboonclothes.netlify.app/', description: 'Sitio web'};
    const repoBaboon = [{repository: 'https://github.com/francatania/BaboonClothes', description: 'Repositorio Frontend'}]

    const imgsGestor = [gestorMobile2, gestorMobile3, gestorMobile, gestorMobile4, gestorWeb];
    const titleGestor = "Gestor Gastos";
    const techGestor = "React, Tailwind CSS, Node JS, Express JS, Mongo DB.";
    const descriptionGestor = "Gestor de Gastos con sistema de login, gastos, ingresos, multiplicidad de cuentas, transferencias entre cuentas y gráficos para análisis.";
    const websiteGestor = {website:"https://mi-gestor-gastos.netlify.app/",description: 'Sitio web'}
    const repoGestor = [{repository:'https://github.com/francatania/gestor-gastos-client', description:'Repositorio Frontend'}, {repository:'https://github.com/francatania/gestor-gastos-backend', description:'Repositorio Backend'}]

    const imgsFarmaCordoba = [];
    const titleFarmaCordoba = "FarmaCórdoba";
    const techFarmaCordoba = "Vanilla JS, Bootstrap, .NET 8, C#, SQL Server."
    const descriptionFarmaCordoba = "Proyecto integral para Programación y Base de Datos en la Tecnicatura en Programación. Backoffice enfocado para la gestión de un grupo de farmacias. La solución incluye login con sistema de Roles, varios ABMC, apartado de transacciones y dashboards utilizando chart.js. Se dividieron las responsabilidades de validaciones y lógica de negocio entre el backend y la BD utilizando triggers y SP."
    const  videoFarmaCordoba = 'https://www.youtube.com/embed/rncYto-AxHg'
    const repoFarma = [{repository: 'https://github.com/Leon-rod/FarmaCordoba', description: 'Repositorio de Frontend, Backend y BD'}]


    const titleABMC = "ABMC Medicamentos";
    const techABMC = "React + Typescript, Tailwind CSS, JWT, .NET 8, C#, SQL Server.";
    const descriptionABMC = "Proyecto en el que se utilizó React con TypeScript para el desarrollo del frontend y se implementó JWT para la autenticación en la API.";
    const videoABMC = "https://www.youtube.com/embed/U34WirYqPeQ";
    const repoABMC = [{repository: 'https://github.com/francatania/MedicamentosABMC', description: 'Repositorio Frontend'}, {repository:'https://github.com/francatania/FarmaCordoba_API', description: 'Repositorio Backend'}]

    return (<>
        <section id="proyectos-web" className="bg-whiteMag w-full text-oceanBlue flex flex-col items-center mt-[-1px] mb-[-1px] pb-[1px]">
            <div className=" w-[70%] flex justify-center items-center h-[10%]">
                <h2 className="text-center text-3xl font-bold mb-8 ">Proyectos</h2>
            </div>
            <div className="flex flex-wrap w-full sm:w-[70%] h-[90%] justify-around gap-4">
                <ProjectCard arrayImgs = {imgsBaboon} title = {titleBaboon} tech = {techBaboon} description={descriptionBaboon} website={websiteBaboon} repository={repoBaboon}></ProjectCard>
                
                <ProjectCard arrayImgs = {imgsGestor} title = {titleGestor} tech = {techGestor} description={descriptionGestor} website={websiteGestor} repository={repoGestor}></ProjectCard>

                <ProjectCard arrayImgs = {imgsFarmaCordoba} title = {titleFarmaCordoba} tech = {techFarmaCordoba} description={descriptionFarmaCordoba} repository = {repoFarma} videoUrl={videoFarmaCordoba}></ProjectCard>

                <ProjectCard title={titleABMC} tech={techABMC} description={descriptionABMC} videoUrl={videoABMC} repository={repoABMC}>

                </ProjectCard>
                
            </div>
        </section>
    </>)
}

export default Project;