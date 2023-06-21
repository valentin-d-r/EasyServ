import { NavLink } from 'react-router-dom'
import LogoES from '../LogoES.png'
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/"><img src={LogoES} width={70} height={70}
            title="LogoES" alt="LogoES"></img></a>
        </div>
        <div className="search">
          <input type="search" className="search-bar" placeholder="Search..." />
          <i className="fa fa-search search-icon" />
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