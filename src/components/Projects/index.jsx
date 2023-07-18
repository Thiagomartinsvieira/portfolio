import React from 'react'
import './projects.css'
import {
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiReact,
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
              Each project is a unique piece of development 🧩
            </h3>
            <div className="projects-grid">
              <div className="project-card project-card-1">
                <div className="project-image">
                  <a
                    target="_blank"
                    href="https://movies-prime-flix.netlify.app/"
                    rel="noreferrer"
                  >
                    <img
                      src="src/assets/prime-flix.webp"
                      alt="website"
                    />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Prime Flix</h3>
                  <p className="project-description">
                    "Lorem ipsum dolor sit amet. Aut repudiandae atque ea
                    exercitationem accusamus non modi dolores! Et labore
                    officiis et libero temporibus aut voluptatum tempore. In
                    obcaecati dolore aut iure dolores cum repellat beatae qui
                    natus sunt."
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
                  <a target="_blank" href="#" rel="noreferrer">
                    <img src="src/assets/prime-flix.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Prime Flix</h3>
                  <p className="project-description">
                    "Lorem ipsum dolor sit amet. Aut repudiandae atque ea
                    exercitationem accusamus non modi dolores! Et labore
                    officiis et libero temporibus aut voluptatum tempore. In
                    obcaecati dolore aut iure dolores cum repellat beatae qui
                    natus sunt."
                  </p>
                  <div className="project-stack">
                    <p>
                      <SiReact size={30} color="#61DAFB" />
                    </p>
                  </div>

                  <div className="project-links">
                    <a target="_blank" href="#" rel="noreferrer">
                      code <SiGithub />
                    </a>
                    <a target="_blank" href="#" rel="noreferrer">
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
                    "Lorem ipsum dolor sit amet. Aut repudiandae atque ea
                    exercitationem accusamus non modi dolores! Et labore
                    officiis et libero temporibus aut voluptatum tempore. In
                    obcaecati dolore aut iure dolores cum repellat beatae qui
                    natus sunt."
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
                    "Lorem ipsum dolor sit amet. Aut repudiandae atque ea
                    exercitationem accusamus non modi dolores! Et labore
                    officiis et libero temporibus aut voluptatum tempore. In
                    obcaecati dolore aut iure dolores cum repellat beatae qui
                    natus sunt."
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
                    href="https://site-de-passagens.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/site-passagens.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Bus Ticket WebSite</h3>
                  <p className="project-description">
                    "Lorem ipsum dolor sit amet. Aut repudiandae atque ea
                    exercitationem accusamus non modi dolores! Et labore
                    officiis et libero temporibus aut voluptatum tempore. In
                    obcaecati dolore aut iure dolores cum repellat beatae qui
                    natus sunt."
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
                    href="https://relogio-digital-two-delta.vercel.app/"
                    rel="noreferrer"
                  >
                    <img src="src/assets/relogio-digital.webp" alt="website" />
                  </a>
                </div>
                <div className="project-details">
                  <h3 className="project-name">Digital Watch</h3>
                  <p className="project-description">
                    "Lorem ipsum dolor sit amet. Aut repudiandae atque ea
                    exercitationem accusamus non modi dolores! Et labore
                    officiis et libero temporibus aut voluptatum tempore. In
                    obcaecati dolore aut iure dolores cum repellat beatae qui
                    natus sunt."
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
