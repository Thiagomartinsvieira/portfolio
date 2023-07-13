import './About.css'
import {} from 'react-icons/'

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container-about">
          <img
            className="img-about"
            src="https://img.freepik.com/vetores-gratis/hacker-operando-uma-ilustracao-do-icone-dos-desenhos-animados-laptop-conceito-de-icone-de-tecnologia-isolado-estilo-flat-cartoon_138676-2387.jpg"
            alt=""
          />

          <h2 className="about-me">About Me</h2>

          <p className="text-side-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, atque.
            Numquam error, laudantium debitis id aperiam praesentium ad,
            laboriosam alias sequi magnam labore nobis corrupti quos reiciendis
            eveniet similique? Qui? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti quidem voluptatem totam iusto suscipit
            earum nemo explicabo porro hic dolore, odio, omnis molestiae
            aperiam! Cumque cum amet aut expedita voluptatum.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
