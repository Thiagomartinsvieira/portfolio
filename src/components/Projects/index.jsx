import React from 'react'
import './projects.css'
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

function Projects() {
  return (
    <div>
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <div className="projects-content">
            <p className="projects-subtitle">Portfolio</p>
            <h3 className="projects-title">
              As with a well-tuned gear, every part is critical. for web
              development to flow smoothly. 🧩
            </h3>
            <div className="projects-grid">
            <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://fullstack-tasks.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/taskmaster.png" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">
                    Full Stack TaskMaster (in progress)
                  </h3>
                  <p className="project-description">
                    "This project is a Task Management Application built to help users manage tasks efficiently. 
                    It allows users to create, edit, delete, and list tasks, while ensuring secure user authentication and task management functionalities."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiReact size={30} color="#61DAFB" />
                      <SiTailwindcss size={30} color="#38BDF8" />
                      <SiExpress size={30} color="#000000" />
                      <SiJsonwebtokens size={30} color="#000000" />
                      <SiSequelize size={30} color="#52B0E7" />
                      <SiDocker size={30} color="#2496ED" />
                      <SiMysql size={30} color="#4479A1" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/fullstack-tasks"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://fullstack-tasks.vercel.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiVercel color="#000000" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://afc-richmond.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/afc_richmond1.png" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">
                    AFC Richmond official website (in progress)
                  </h3>
                  <p className="project-description">
                    "Developing the "official" AFC Richmond page, dive in
                    creating a unique digital experience, driven by for the
                    engaging narrative of the Ted Lasso series. With Next.js,
                    React.js, Tailwind CSS and TypeScript, shape an online space
                    that captures the magic of English football. This project,
                    still in progress, reflects my passion for web development.
                    Every line of code is a tribute to the trainer's journey of
                    American football in the series. Constantly evolving, the
                    AFC Richmond will come to digital life under my dedication
                    and web development skills."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiNextdotjs size={30} />
                      <SiReact size={30} color="#61DAFB" />
                      <SiTypescript size={30} color="#007ACC" />
                      <SiTailwindcss size={30} color="#38BDF8" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/afc-richmond"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://afc-richmond.vercel.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiVercel color="#000000" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://tickets-project-1f300.web.app/"
                    rel="noreferrer"
                  >
                    <img
                      src="src/assets/incident-management.png"
                      alt="website"
                    />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Incident Management System</h3>
                  <p className="project-description">
                    "I developed an Incident Management System as part of my
                    journey as a developer. Inspired by my experience as a
                    Service Desk Analyst, the system offers features such as
                    user registration, customer registration, opening,
                    monitoring and resolving tickets, user authentication, route
                    protection and a knowledge base with search functionality.
                    Additionally, the system allows users to personalize their
                    experience with the addition of the long-awaited Dark Mode."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiReact size={30} color="#61DAFB" />
                      <SiJavascript size={30} color="#F7DF1E" />
                      <SiFirebase size={30} color="#FFA000" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/incident-management-system"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://tickets-project-1f300.web.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiFirebase color="#FFA000" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://site-de-passagens.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/site-passagens.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Bus Ticket WebSite</h3>
                  <p className="project-description">
                    "Version 2 of the Auto Viação Vieira Website: Fictitious
                    project developed with React and TypeScript. Intuitive
                    interface, improved navigation, online ticket purchase,
                    attractive promotions and emphasis on safety and comfort.
                    Demonstration of skills in front-end development and
                    creation of responsive interfaces."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiReact size={30} color="#61DAFB" />
                      <SiTypescript size={30} color="#007ACC" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/siteDePassagens"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://site-de-passagens.vercel.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiVercel color="#000000" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://movies-prime-flix.netlify.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/prime-flix.webp" alt="website" />
                  </a>
                </div>

                <div className="project-details">
                  <h3 className="project-name">Prime Flix</h3>
                  <p className="project-description">
                    "Prime-Flix: My first project using an API. A React
                    application that uses The Movie Database (TMDb) API to
                    explore movies and series. Search detailed information,
                    ratings, cast and genres. Personalized recommendations,
                    playlists and viewing progress tracking. An intuitive and
                    user-friendly navigation experience for movie and series
                    enthusiasts."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiReact size={30} color="#61DAFB" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/projeto-filmes"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://movies-prime-flix.netlify.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiNetlify color="#6bd1d7" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://gerador-de-senha-theta-one.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/gerador-de-senha.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Password generator</h3>
                  <p className="project-description">
                    "Password generator developed with HTML5, CSS3 and
                    JavaScript. The tool allows you to generate personalized
                    passwords with a variable length of characters. The user can
                    adjust the password length using a slider and then generate
                    a new password by clicking the corresponding button. The
                    generated password is displayed on the screen and can be
                    copied with a single click. A practical and secure solution
                    for creating strong passwords."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiHtml5 size={30} color="#e34c26" />
                      <SiCss3 size={30} color="#264de4" />
                      <SiJavascript size={30} color="#F7DF1E" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/Gerador_de_senha"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://gerador-de-senha-theta-one.vercel.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiVercel color="#000000" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://calculadora-one-sand.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/calculadora.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Calculator</h3>
                  <p className="project-description">
                    "Simple calculator developed with HTML5, CSS3 and
                    JavaScript. The calculator has an intuitive interface,
                    allowing to add numbers and operators to the result, clear
                    it and perform calculations. It is an efficient
                    implementation and interactive, showcasing developing skills
                    frontend."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiHtml5 size={30} color="#e34c26" />
                      <SiCss3 size={30} color="#264de4" />
                      <SiJavascript size={30} color="#F7DF1E" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/Calculadora"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://calculadora-one-sand.vercel.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiVercel color="#000000" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://relogio-digital-two-delta.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/relogio-digital.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Digital Watch</h3>
                  <p className="project-description">
                    "Page of a Digital Clock developed with HTML5, CSS3 and
                    JavaScript. The clock displays the hours, minutes and
                    seconds dynamically and in real time. Through JavaScript,
                    the time information is automatically updated every second.
                    The design is simple and minimalist, with the numbers and
                    units of time arranged in columns. It's a project that
                    demonstrates skills in time manipulation with JavaScript and
                    creation of responsive interfaces."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiHtml5 size={30} color="#e34c26" />
                      <SiCss3 size={30} color="#264de4" />
                      <SiJavascript size={30} color="#F7DF1E" />
                    </p>
                  </div>
                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/relogio-digital"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://relogio-digital-two-delta.vercel.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiVercel color="#000000" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://login-thiago-dev.netlify.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/login.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Login screen</h3>
                  <p className="project-description">
                    "My first project that I did in a responsive way deals with
                    a login page made with HTML5 and CSS3, I applied a
                    transition effect that has a small delay that make format
                    change based on screen size"
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiHtml5 size={30} color="#e34c26" />
                      <SiCss3 size={30} color="#264de4" />
                    </p>
                  </div>

                  <div className="project-links">
                    <a
                      target="_blank"
                      href="https://github.com/Thiagomartinsvieira/Projeto-login"
                      rel="noreferrer"
                    >
                      code <SiGithub />
                    </a>
                    <a
                      target="_blank"
                      href="https://login-thiago-dev.netlify.app/"
                      rel="noreferrer"
                    >
                      Deploy <SiNetlify color="#6bd1d7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
