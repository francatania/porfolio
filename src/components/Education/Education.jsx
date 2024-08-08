import TUP from "./TUP.jsx";
import CODER from "./CODER.jsx"
import ING from "./ING.jsx"
import ARGProg from "./ARGProg.jsx";

const Education = () =>{
    return (
        <>
        <section className="flex flex-col bg-oceanBlue w-full m-auto text-whiteMag">
            <div className=" w-[70%] m-auto">
                <h2 className="text-center text-3xl font-bold mb-8 ">Educación</h2>
            </div>
            <TUP></TUP>
            <CODER></CODER>
            <ING></ING>
            <ARGProg></ARGProg>
        </section>
        </>
    );
}

export default Education;