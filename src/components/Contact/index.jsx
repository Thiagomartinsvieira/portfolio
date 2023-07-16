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
                {' '}
                As a front-end developer, I am always open to new contact
                opportunities. If you're looking for a qualified professional
                with a passion for creating amazing user interfaces, I'm
                available to collaborate on challenging projects. Please feel
                free to contact me to discuss ideas, job opportunities, or any
                queries related to front-end development. I look forward to
                working in partnership and contributing to the success of new
                projects. 🙂
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
          <a href="mailto:thiagoalagadico@hotmail.com">
            thiagoalagadico@hotmail.com
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
