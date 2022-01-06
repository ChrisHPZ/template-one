import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdMessage } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";
const Contact = () => {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_pakkssw',
            'template_bu3qyz9',
            form.current,
            'user_6975zIumYLHHRyXTghb2W'
            ).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });
    }
    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-section">
                <label htmlFor="name"><BsFillPersonFill /> Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-section">
                <label htmlFor="email"><MdEmail /> Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-section message">
                <label htmlFor="message"><MdMessage /> Message:</label>
                <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="form-submit"><RiMailSendFill /> SEND</button>
        </form>
     );
}
 
export default Contact;