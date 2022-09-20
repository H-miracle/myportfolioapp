import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {BsSlack} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2hjx7sq', 'template_bi22xye', form.current, 'yqOv_51N6vxVTePzb')

    e.target.reset()
  }


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>maccarthymiracle@gmail</h4>
            <h5>Email</h5>
            <a href="http://mailto:maccarthymiracle@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>+233543976961</h4>
            <h5>Whatsapp</h5>
            <a href="http://api.whatsapp.com/send?phone=+233543976961" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsSlack className='contact__option-icon'/>
            <h4>H-Miracle</h4>
            <h5>Slack</h5>
            <a href="http://slack.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* =========END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>

      </div>
    </section>
  )
}

export default Contact