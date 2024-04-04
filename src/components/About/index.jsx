import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <article className="container-about">
        <img className="img-about" src="src/assets/hacker.png" alt="" />

        <h2 className="about-me">About Me</h2>

        <p className="text-side-p">
          Hello, I'm <strong>Thiago Martins</strong>, a{' '}
          <strong>Full Stack Developer</strong> passionate about technology.
          With two years of project experience, I stand out for my dedication to
          self-taught learning. Specializing in React, NextJS, Javascript,
          Typescript and Tailwind CSS, I'm ready to create engaging interfaces
          and intuitive user experiences. My ability to lead projects, both
          independently and in a team, is backed by solid knowledge in version
          control with Git and GitHub. Determined to face challenges and grow
          professionally, I am open to opportunities that allow me to apply my
          knowledge and contribute to innovative projects. Thank you for your
          attention!
        </p>
      </article>
    </section>
  )
}

export default About
