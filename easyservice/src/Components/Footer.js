import '../style/Footer.css'
import LogoGIT from '../LogoGIT.png'
import LogoLINKEDIN from '../LogoLINKEDIN.png'
import LogoTWITTER from '../LogoTWITTER.png'

const Footer = () => {
    return (
        <footer className="Footer">
            <div></div>
            <div className="foo-container">
                <div className="foo-logoGIT">
                    <a href="https://github.com/amauroy"><img src={LogoGIT} width={30} height={30}
                        title="LogoGIT" alt="Github"></img></a>
                </div>
                <div className="foo-logoLINKEDIN">
                    <a href="https://www.linkedin.com/in/amaury-roy-59a740243/"><img src={LogoLINKEDIN} width={30} height={30}
                        title="LogoLINKEDIN" alt="Linkedin"></img></a>
                </div>
                <div className="foo-logoTWITTER">
                    <a href="https://twitter.com/roy_amaury"><img src={LogoTWITTER} width={30} height={30}
                        title="LogoTWITTER" alt="Twitter"></img></a>
                </div>
            </div>
            <div></div>
        </footer>

    )
}
export default Footer

