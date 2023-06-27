
import LogoAccueil from '../LogoAccueil.png'
import LogoDemandes from '../LogoDemandes.png'
import LogoLogin from '../LogoLogin.png'
import LogoProfil from '../LogoProfil.png'
import LogoChat from '../LogoChat.png'
import '../style/Navbar.css'
import { MaterialSymbolsVisibilityRounded } from '../front/Parrainage'
export function MaterialSymbolsHomeRounded(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="#0095e7" d="M6 21q-.825 0-1.413-.588T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5q.325 0 .625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4v-7h-4v7H6Z"></path></svg>
    )
}

export function LucideHelpingHand(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="#0095e7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 15l5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68l4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19m-5-5l6 6"></path></svg>
    )
}

export function IconoirProfileCircle(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="#0095e7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z"></path><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></path></g></svg>
    )
}

export function MdiAccountArrowRight(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="#0095e7" d="M18 16h-4v2h4v2l3-3l-3-3v2M11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 10c-4.4 0-8 1.8-8 4v2h9.5c-.3-.8-.5-1.6-.5-2.5c0-1.2.3-2.3.9-3.4c-.6 0-1.2-.1-1.9-.1"></path></svg>
    )
}

export function BasilChatSolid(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="#0095e7" fillRule="evenodd" d="M8.002 4.553a50.577 50.577 0 0 1 8.099.04l1.623.138a2.666 2.666 0 0 1 2.409 2.252l.102.669a20.665 20.665 0 0 1-.096 6.835a2.343 2.343 0 0 1-2.305 1.923H8.858c-.207 0-.41.051-.592.149l-3.911 2.102A.75.75 0 0 1 3.25 18V9.483a4.93 4.93 0 0 1 4.559-4.915l.193-.015ZM8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5Zm4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Zm2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Z" clipRule="evenodd"></path></svg>
    )
}


const Mobile_Navbar = () => {
    return (
        <nav className="navbar">
            <div className="mobile_navbar">
                <a href="/">
                    <MaterialSymbolsHomeRounded width={30} height={30} />
                </a>
                <a href="../Demandes">
                    <LucideHelpingHand width={30} height={30} />
                </a>
                <a href="../Profil">
                    <IconoirProfileCircle width={30} height={30} />
                </a>
                <a href="../Login">
                    <MdiAccountArrowRight width={30} height={30} />
                </a>
                <a href="../Chat">
                    <BasilChatSolid width={30} height={30} />
                </a>
            </div>
        </nav>
    )
}
export default Mobile_Navbar

