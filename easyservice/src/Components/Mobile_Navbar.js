
import LogoAccueil from '../LogoAccueil.png'
import LogoDemandes from '../LogoDemandes.png'
import LogoLogin from '../LogoLogin.png'
import LogoProfil from '../LogoProfil.png'
import LogoChat from '../LogoChat.png'
import '../style/Navbar.css'

const Mobile_Navbar = () => {
    return (
        <nav className="navbar">
            <div className="mobile_navbar">
                <a href="/"><img src={LogoAccueil} width={25} height={25}
                    title="LogoAccueil" alt="Accueil"></img></a>

                <a href="../Demandes"><img src={LogoDemandes} width={25} height={25}
                    title="LogoDemandes" alt="Demandes"></img></a>

                <a href="../Profil"><img src={LogoProfil} width={25} height={25}
                    title="LogoProfil" alt="LogoProfil"></img></a>

                <a href="../Login"><img src={LogoLogin} width={25} height={25}
                    title="LogoLogin" alt="Login"></img></a>

                <a href="../Chat"><img src={LogoChat} width={25} height={25}
                    title="LogoChat" alt="Chat"></img></a>

            </div>
        </nav>
    )
}
export default Mobile_Navbar

