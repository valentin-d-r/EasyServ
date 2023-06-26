import { Link } from "react-router-dom";
import React, {useState} from "react";
import "../style/Register.css";
import axios from "axios";

const handleSubmit = async (e) => {
  console.log("----|||||test");
  e.preventDefault();
  
  // Récupérer les valeurs des champs du formulaire
  const prenom = e.target.elements.Name.value;
  const nom = e.target.elements.LastName.value;
  const email = e.target.elements.Email.value;
  const password = e.target.elements.Password.value;
  // Ajoutez d'autres champs selon vos besoins

  // Créez un objet contenant les données à envoyer
  const data = {
    nom,
    prenom,
    email,
    password,
    // Ajoutez d'autres champs selon vos besoins
  };

  try {
    // Effectuer la requête POST
    console.log("----|||||test");
    const response = await axios.post('localhost:3000/', data);

    // Traitez la réponse si nécessaire
    console.log("----|||||test");
    console.log(response.data);
  } catch (error) {
    // Gérez les erreurs de requête
    console.error(error);
  }
};
  
const Register = () => (
    <div className="reg-container">
      <form className="form " onSubmit={handleSubmit} id="createAccount">
        <h1 className="form__title">Créer un compte</h1>
        <div className="form__message form__message--error" />
        <div className="form__input-group">
          <input
            type="text"
            id="Name"
            name="Name"
            className="form__input"
            autofocus
            placeholder="Prénom"
          />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <input
            type="text"
            id="LastName"
            name="LastName"
            className="form__input"
            autofocus
            placeholder="Nom"
          />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <input
            type="email"
            id="Email"
            name="Email"
            className="form__input"
            autofocus
            placeholder="Email"
          />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <input
            type="Mot de passe" 
            id="Password"
            name="Password"
            className="form__input"
            autofocus
            placeholder="Mot de passe"
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
  export default Register
