import React from 'react';
import '../style/Error404.css';
import Logo from "../LogoES.png"
import { Link } from 'react-router-dom';
import home from "./Home"

const Error404 = () => {
  return (
    <div className="error-container">
      <img src={Logo} alt="Logo de la marque" className="logo" />
      <h1 className="title">Erreur 404</h1>
      <div className="description">La page que vous recherchez est introuvable.</div>
      <Link className="back-button" to="/" components={home} id="linkHome">
        Retourner à l'accueil
      </Link>



    </div>
  );
};

export default Error404;
