import './Footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footerrc">
          <h3>2023 - All rights are free - Developed by Thiago Martins</h3>
        </div>
        <div className="footerrc-social">
          <a
            href="https://www.linkedin.com/in/thiago-martins-vieira-074550192/"
            className="social-icon"
          >
            <FaLinkedin size={35} color="white" />
          </a>
          <a
            href="https://github.com/Thiagomartinsvieira"
            className="social-icon"
          >
            <FaGithub size={35} color="white" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
