import { FaBootstrap, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiSupabase,
  SiFirebase,
  SiLinux,
  SiGit,
  SiGithub as SiGithubIcon,
  SiJest,
  SiVitest,
  SiVuedotjs,
} from 'react-icons/si'
import './Home.css'

function Home({ isDarkTheme }) {
  const nextJsColor = isDarkTheme ? '#ffffff' : '#000000'

  return (
    <div>
      <section id="home" className="home">
        <img
          src="https://avatars.githubusercontent.com/u/111084586?v=4"
          alt=""
          className="my-img"
        />

        <h1>Full Stack Developer</h1>
        <h2>
          Hello, my name is Thiago Martins and I am a Full Stack Developer 👨🏻‍💻
        </h2>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/thiago-martins-vieira-074550192/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/Thiagomartinsvieira"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={40} />
          </a>
        </div>

        <div className="skills">
          <div className="skills-title">
            <img src="src/assets/dev.gif" alt="" />
            <p>Tech Stack</p>
          </div>

          <h3 className="stack-subtitle">Front-End</h3>
          <div className="logos">
            <ul>
              <li className="icon-item"><SiHtml5 size={40} color="#E34F26" /></li>
              <li className="icon-item"><SiCss3 size={40} color="#1572B6" /></li>
              <li className="icon-item"><SiJavascript size={40} color="#F7DF1E" /></li>
              <li className="icon-item"><SiTypescript size={40} color="#007ACC" /></li>
              <li className="icon-item"><SiReact size={40} color="#61DAFB" /></li>
              <li className="icon-item"><SiNextdotjs size={40} color={nextJsColor} /></li>
              <li className="icon-item"><SiVuedotjs  size={40} color="#4FC08D" /></li>
              <li className="icon-item"><SiTailwindcss size={40} color="#38B2AC" /></li>
              <li className="icon-item"><FaBootstrap size={40} color="#563D7C" /></li>
              <li className="icon-item"><SiRedux size={40} color="#764ABC" /></li>
              <li className="icon-item"><SiSass size={40} color="#CC6699" /></li>
            </ul>
          </div>

          <h3 className="stack-subtitle">Back-End & Tools</h3>
          <div className="logos">
            <ul>
              <li className="icon-item"><SiNodedotjs size={40} color="#339933" /></li>
              <li className="icon-item"><SiExpress size={40} color={nextJsColor} /></li>
              <li className="icon-item"><SiPhp size={40} color="#8993BE" /></li>
              <li className="icon-item"><SiSupabase size={40} color="#3ECF8E" /></li>
              <li className="icon-item"><SiFirebase size={40} color="#FFCA28" /></li>
              <li className="icon-item"><SiLinux size={40} color={nextJsColor} /></li>
              <li className="icon-item"><SiGit size={40} color="#F05032" /></li>
              <li className="icon-item"><SiGithubIcon size={40} color={nextJsColor} /></li>
            </ul>
          </div>

          <h3 className="stack-subtitle">Testing</h3>
          <div className="logos">
            <ul>
              <li className="icon-item"><SiJest size={40} color="#99425B" /></li>
              <li className="icon-item"><SiVitest size={40} color="#6E9F18" /></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
