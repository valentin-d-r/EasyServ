import { NavLink } from 'react-router-dom'
import Logo from '../LogoES.png'
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={Logo} width={70} height={70} alt="Logo"></img>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="../Demandes">Mes demandes</NavLink>
            </li>
            <li>
              <NavLink to="../Profil">Mon profil</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="../Login">Se connecter</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar