const CODER = () =>{
    return (<>
    <article className="w-[70%] h-[30rem] m-auto flex flex-row"> 
            <div className="flex flex-col items-center h-full w-1/2">
                <div className="border-2 border-whiteMag rounded-full h-[4rem] w-40 flex items-center justify-center"> 
                    <h4>2023</h4>
                </div>
                <div className="bg-whiteMag w-[2px] flex-1"></div>
            </div>
            <div className="flex flex-col w-1/2">
                <div className="mb-2"> 
                    <h3 className="text-xl">
                    CODERHOUSE Carrera FullStack 
                    </h3> 
                </div>
                <div>
                    <p className="text-sm">
                        Durante 1 año estudié el stack MERN. La carrera se dividó en Front End y Back End.
                        <br />
                        <br />
                        <ul className="list-disc ml-5">
                            <h4>Front End:</h4>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Firebase</li>
                            <li>Llamadas a API</li>
                        </ul>
                        <br />
                        <ul className="list-disc ml-5">
                            <h4>Back End:</h4>
                            <li>Node js</li>
                            <li>Express js</li>
                            <li>Protocolo HTTP</li>
                            <li>Postman</li>
                            <li>Creación de API</li>
                            <li>Integración con Front End</li>
                            <li>Mongo DB</li>
                        </ul>
                    </p>
                </div>
            </div>
        </article>
    </>)
}

export default CODER;