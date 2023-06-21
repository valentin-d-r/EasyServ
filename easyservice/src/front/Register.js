import { Link } from "react-router-dom";
import React, {useState} from "react";
import "../style/Register.css";
const crypt = require('bcrypt');
const saltRounds = 10;

export default function InscriptionPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');


  const hash = crypt.hashSync(myPlaintextPassword, saltRounds);

//Faire l'envoie de données d'enregistrement dans le front avec les variables email, password, nom et prenom
  
return (
    <div className="reg-container">
      <form className="form " method="post" action="" id="createAccount">
        <h1 className="form__title">Créer un compte</h1>
        <div className="form__message form__message--error" />
        <div className="form__input-group">
          <input
            type="text"
            id="Username"
            className="form__input"
            autofocus
            placeholder="Nom de compte"
          />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <input
            type="email"
            id="Email"
            className="form__input"
            autofocus
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required
          />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <input
            type="Mot de passe" 
            id="Password"
            className="form__input"
            autofocus
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)} required
          />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <input
            type="password"
            id="Validpassword"
            className="form__input"
            autofocus
            placeholder="Confirmer mot de passe"
          />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <button className="form__button" type="submit">
            Créer mon compte
          </button>
        </div>
        <p className="form__text">
          <a className="form__link" href="./Login" id="linkLogin">
            J'ai déjà un compte? Se connecter
          </a>
        </p>
      </form>
    </div>
  )
}
