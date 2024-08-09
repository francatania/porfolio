import { useState, useEffect } from "react";

const Toast = () => {
    const [isRendering, setIsRendering] = useState(false);


    useEffect(() => {

        const renderTimeout = setTimeout(() => {
            setIsRendering(true);
        }, 100); 

        const exitTimeout = setTimeout(() => {
            setIsRendering(false);
        }, 2000);


        return () => {
            clearTimeout(renderTimeout);
            clearTimeout(exitTimeout);
        };
    }, []);

    return (
        <>
                <div
                    className={`fixed top-4 ${
                        isRendering ? "right-4" : "right-[-100%]"
                    } w-[10rem] h-[3rem] bg-green-400 p-4 rounded-md z-50 flex justify-center items-center transition-all duration-500 ease-in-out font-montserrat text-oceanBlue`}
                >
                    <h2>¡Mail enviado!</h2>
                </div>
            
        </>
    );
};

export default Toast;
