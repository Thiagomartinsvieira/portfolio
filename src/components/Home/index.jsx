import { 
    FaGithub, 
    FaLinkedin,
} from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiReact,SiCss3,SiHtml5 } from 'react-icons/si'
import './Home.css'
import '../../assets/html5.svg'

const Home = () => {
    return (
       <div>
           <section>
            
            <img src="https://avatars.githubusercontent.com/u/111084586?v=4" 
            alt="" className='my-img'/>
            
               <h1>Front-End Developer</h1>
               <h2>Hello, my name is Thiago Martins and I am a Front-End web developer.👨🏻‍💻</h2>
        

            <div className='social-media'>
                <a href="https://www.linkedin.com/in/thiago-martins-vieira-074550192/"
                target='_blank' rel="noreferrer">
                    <FaLinkedin size={30}/>
                </a>
                <a href="https://github.com/Thiagomartinsvieira"
                target='_blank' rel="noreferrer">
                    <FaGithub size={30}/>
                </a>
            </div>   

            <div className='skills'>
                <p>Tech Stack</p>
                <div className='logos'>
                    <ul>
                        <li><SiHtml5 size={35} color='#2d2e32'/></li>
                        <li><SiCss3 size={35} color='#2d2e32'/></li>
                        <li><SiJavascript  size={35} color='#2d2e32' /></li>
                        <li><SiTypescript size={35} color='#2d2e32'/></li>      
                        <li><SiReact size={35} color='#2d2e32'/></li> 
                    </ul>
                </div>
            </div>
           
           </section>
       </div>
    )
}

export default Home