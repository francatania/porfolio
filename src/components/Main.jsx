import Description from './Description.jsx'
import Waves from './reusable/Waves.jsx'
import WavesDown from './reusable/WavesDown.jsx'
import Tecnologies from './Tecnologies.jsx'
import Education from './Education/Education.jsx'
import Project from './Projects/Project.jsx'
import Contact from './Contact.jsx'


export function Main(){
    const white = '#EFE9F4'
    const blue = '#274690'
    const dark = '#1B264F'

    return (
    <div className="w-full h-auto bg-oceanBlue font-montserrat pt-3">
        <Description></Description>
        <Waves up={true} color={white} id="tecn"></Waves>
        <Tecnologies/>
        <Waves up={false} color={white} id="educacion" ></Waves>
        <Education/>
        <Waves up={true} color={white} id="proyectos"></Waves>
        <Project/>
        <Waves up={false} color={white} id="contacto" ></Waves>
        <Contact/>
    </div>
  
)
}