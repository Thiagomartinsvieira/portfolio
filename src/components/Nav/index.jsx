import { useEffect } from 'react'
import './Nav.css'
import { NavLink } from "react-router-dom"

const Nav = () => {

    useEffect(() => {
        
    }, [])
    return (
        <nav className='navMenu fixed'>
            <ul>
                <li>
                    <NavLink to='#'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='#'>Stacks</NavLink>
                </li>
                <li>
                    <NavLink to='#'>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='#'>Contact</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Nav