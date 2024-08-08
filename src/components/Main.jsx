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
    <div className="w-full h-auto bg-oceanBlue">
        <Description></Description>
        <Waves up={true} color={white} ></Waves>
        <Tecnologies/>
        <Waves up={false} color={white} ></Waves>
        <Education/>
        <Waves up={true} color={white} ></Waves>
        <Project/>
        <Waves up={false} color={white} ></Waves>
        <Contact/>


    </div>
  
)
}