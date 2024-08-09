import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Toast from "./reusable/Toast.jsx";

const Contact = () =>{
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [toast, setToast] = useState(false);
    const [errorForm, setErrorForm] = useState(false);

    const writingName = (e) =>{
        setFormData({
            ...formData,
            name: e.target.value});
    }

    const writingEmail = (e) =>{
        setFormData({
            ...formData,
            email: e.target.value});
    }

    const writingMessage = (e) =>{
        setFormData({
            ...formData,
            message: e.target.value});
    }

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.message) {
            setErrorForm(true);
            return false;
        }
        setErrorForm(false);
        return true;
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if(!validateForm()){
            return;
        }
    
        emailjs
            .sendForm('service_x8ngf5a', 'template_v8qtvnr', form.current, {
            publicKey: 'BwmZ4WdE4B-oOrfoH',
            })
            .then(
            () => {
                console.log('SUCCESS!');
                showToast();
            },
            (error) => {
                console.log('FAILED...', error.text);
                
            },
            );

        setFormData({
            name: '',
            email: '',
            message: ''
        })
        };

        const showToast = ()=>{
            if(!errorForm){
                setTimeout(()=>{setToast(true)}, 1000)
            

                setTimeout(()=>{
                    setToast(false)
                }, 5000)
            }

        }

    return (<>
        <section id="contacto-web" className="bg-oceanBlue w-full flex flex-col items-center pb-[5rem]">
            <div className="w-[90%] sm:w-[70%]">
                <h2 className='text-center text-3xl font-bold mb-8 text-whiteMag'>Contacto</h2>
            </div>

            <div className="w-[90%] sm:w-[70%] flex flex-col items-center">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[100%] sm:w-[50%] gap-2">
                    <label className="text-whiteMag ">Nombre y Apellido</label>
                    <input type="text" name="user_name" className="bg-whiteMag rounded-sm p-2" required value={formData.name} onChange={writingName}/>

                    <label className="text-whiteMag">Email</label>
                    <input type="email" name="user_email" className="bg-whiteMag rounded-sm p-2" required value={formData.email} onChange={writingEmail}/>

                    <label className="text-whiteMag">Mensaje</label>
                    <textarea required name="message" style={{ resize: 'none', height: '20rem' }} className="bg-whiteMag rounded-sm p-2" value={formData.message} onChange={writingMessage} />

                    <input className="text-whiteMag bg-darkBlue mt-2 p-2 border-whiteMag border-2 rounded-[0.5rem] hover:cursor-pointer transition duration-150 hover:ease-in hover:bg-oceanBlue" type="submit" value="Enviar"/>
                </form>
            </div>

            {toast ? <Toast/> : ''}
        </section>
    </>)
}

export default Contact;