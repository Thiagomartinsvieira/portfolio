import './Contact.css'
import { } from 'react-icons/'

function Contact() {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="contatct-content">
          <div className="container">
            <div className="contact-title">
              <h4>Contact</h4>
              <h3>Let's talk! </h3>
              <p>
                As a full stack developer specializing in Java, I am always open to new opportunities. 
                If you're looking for a qualified professional with expertise in both front-end and back-end development, 
                I am available to collaborate on challenging projects. Feel free to reach out to discuss ideas, job opportunities, 
                or any queries related to full stack development. I look forward to partnering on new projects and contributing to their success. 🙂
              </p>
            </div>
          </div>

          <div className="contact-info">
            <h3>Location 📍</h3>
            <p>São Paulo, Brazil</p>
          </div>
        </div>

        <div className="contact-info">
          <h3>Mail 📧 </h3>
          <a href="mailto:thiago.devstack@gmail.com">
            thiago.devstack@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
