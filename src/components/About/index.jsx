import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <article className="container-about">
        <img
          className="img-about"
          src="https://img.freepik.com/vetores-gratis/hacker-operando-uma-ilustracao-do-icone-dos-desenhos-animados-laptop-conceito-de-icone-de-tecnologia-isolado-estilo-flat-cartoon_138676-2387.jpg"
          alt=""
        />

        <h2 className="about-me">About Me</h2>

        <p className="text-side-p">
          Hello, I'm <strong>Thiago Martins</strong>, a{' '}
          <strong>front-end developer</strong> passionate about technology,
          looking for opportunities to apply my knowledge and improve skills.
          Although I don't have experience in this field, I've been working for
          two years as a Service Desk Analyst in the IT market. Despite the lack
          of academic training, I seek knowledge on my own, take courses, and
          develop personal projects. I maintain a daily study routine and I am
          determined to face challenges and grow professionally. I am focused,
          dedicated, and eager to contribute to challenging projects.
          <br />
          Thank you for your attention and the opportunity!
        </p>
      </article>
    </section>
  )
}

export default About
