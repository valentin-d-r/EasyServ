import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../style/Register.css";
import axios from "axios";
import login from "./Login";

const handleSubmit = async (e) => {
  console.log("----|||||test");
  e.preventDefault();

  // Récupérer les valeurs des champs du formulaire
  const firstname = e.target.elements.Name.value;
  const surname = e.target.elements.LastName.value;
  const mail = e.target.elements.Email.value;
  const password = e.target.elements.Password.value;
  // Ajoutez d'autres champs selon vos besoins

  // Créez un objet contenant les données à envoyer
  const data = {
    firstname,
    surname,
    mail,
    password,
    // Ajoutez d'autres champs selon vos besoins
  };
  console.log(data);
  try {
    // Effectuer la requête POST avec un en-tête Content-Type explicitement défini
    const response = await axios.post('http://localhost:3150/api/auth/signup/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Traitez la réponse si nécessaire
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
          autoFocus
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
          placeholder="Mot de passe"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          id="Validpassword"
          className="form__input"
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
        <Link className="form__link" to="/login" components={login} id="linkLogin">
          J'ai déjà un compte? Se connecter
        </Link>
      </p>
    </form>
  </div>
)
export default Register
