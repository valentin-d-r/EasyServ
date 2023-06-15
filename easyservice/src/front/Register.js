import React from 'react';
import '../style/Register.css'
const Register = () => (

   <div className="container">
            <form className="form " id="createAccount">
              <h1 className="form__title">Créer un compte</h1>
              <div className="form__message form__message--error" />
              <div className="form__input-group">
                <input type="text" id="signupUsername" className="form__input" autofocus placeholder="Nom de compte" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="email" className="form__input" autofocus placeholder="Email" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="Mot de passe" className="form__input" autofocus placeholder="Mot de passe" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Confirmer mot de passe" />
                <div className="form__input-error-message" />
              </div>
              <button className="form__button" type="submit">Créer mon compte</button>
              <p className="form__text">
                <a className="form__link" href="./Login" id="linkLogin">J'ai déjà un compte? Se connecter</a>
              </p>
            </form>
          </div>

)


export default Register