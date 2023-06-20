import React from 'react';
import '../style/Login.css'



const Login = () => (

  <div className="log-container">
    <form className="form" id="login">
      <h1 className="form__title">Bienvenue sur Easy Service</h1>
      <div className="form__message form__message--error" />
      <div className="form__input-group">
        <input type="text" id="Username" className="form__input" autofocus placeholder="Nom de compte" />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input type="password" id="Password" className="form__input" autofocus placeholder="Mot de passe" />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <button className="form__button" type="submit">Se conntecter</button>
      </div>
      <p className="form__text">
        <a href="#" className="form__link">Mot de passe oublié ?</a>
      </p>
      <p className="form__text">
        <a className="form__link" href="./Register" id="linkCreateAccount">Je n'ai pas de compte ? Créer un compte</a>
      </p>
    </form>
  </div>
)
export default Login