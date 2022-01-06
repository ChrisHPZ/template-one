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
				document.getElementById('success').style.display = 'block';
                document.getElementById('contact-form').reset()
            }).catch(err => {
                document.getElementById('error').style.display = 'block';
            });
    }
    return (
        <form className="contact-form" id="contact-form" ref={form} onSubmit={sendEmail}>
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
			<h2 id="success">Your message has been received!</h2>
			<h2 id="error">There was a problem, please try again at a later time.</h2>
        </form>
     );
}
 
export default Contact;