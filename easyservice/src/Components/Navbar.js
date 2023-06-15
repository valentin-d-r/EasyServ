import { NavLink } from 'react-router-dom'
import Logo from '../LogoES.png'
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
         <img src={Logo} alt="Logo"></img>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="../front/Home">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="../front/Demandes">Mes demandes</NavLink>
            </li>
            <li>
              <NavLink to="../front/Login">Se connecter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar