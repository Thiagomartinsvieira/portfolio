import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <article className="container-about">
        <img className="img-about" src="src/assets/hacker.png" alt="" />

        <h2 className="about-me">About Me</h2>

        <p className="text-side-p">
        Hello, I'm Thiago Martins, a Full Stack Developer with two years of experience building dynamic and responsive applications. I specialize in React, Next.js, JavaScript, TypeScript, and Tailwind CSS, with back-end expertise in Node.js, PHP, and Java (Spring Boot).  

Currently, I work as a Web Developer at Smart Ideias e Soluções Digitais, creating tailored digital solutions. I also have experience managing databases (MySQL, PostgreSQL, MongoDB), hosting, and performance optimization with WordPress and Cloudflare.  

Passionate about technology and continuous learning, I’m open to opportunities to contribute to innovative projects and grow professionally.  

Thank you for your attention!
        </p>
      </article>
    </section>
  )
}

export default About
