import React from "react";
import "../style/Login.css";
import axios from "axios";

const handleSubmit = async (e) => {
  console.log("----|||||test");
  e.preventDefault();

  // Récupérer les valeurs des champs du formulaire
  const mail = e.target.elements.Email.value;
  const password = e.target.elements.Password.value;
  // Ajoutez d'autres champs selon vos besoins

  // Créez un objet contenant les données à envoyer
  const data = {
    mail,
    password,
    // Ajoutez d'autres champs selon vos besoins
  };
  console.log(data);
  try {
    // Effectuer la requête POST avec un en-tête Content-Type explicitement défini
    const response = await axios.post(
      "http://localhost:3150/api/auth/login/",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Traitez la réponse si nécessaire
    console.log(response.data);
  } catch (error) {
    // Gérez les erreurs de requête
    console.error(error);
  }
};

const Login = () => (
  <div className="log-container">
    <form className="form" onSubmit={handleSubmit} id="login">
      <h1 className="form__title">Bienvenue sur Easy Service</h1>
      <div className="form__message form__message--error" />
      <div className="form__input-group">
        <input
          type="text"
          id="mail"
          name="mail"
          className="form__input"
          autofocus
          placeholder="Email"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          id="password"
          name="password"
          className="form__input"
          autofocus
          placeholder="Mot de passe"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <button className="form__button" type="submit">
          Se connecter
        </button>
      </div>
      <p className="form__text">
        <a href="#" className="form__link">
          Mot de passe oublié ?
        </a>
      </p>
      <p className="form__text">
        <a className="form__link" href="./Register" id="linkCreateAccount">
          Je n'ai pas de compte ? Créer un compte
        </a>
      </p>
    </form>
  </div>
);
export default Login;
