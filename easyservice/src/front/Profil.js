import React from 'react'
import '../style/Profil.css'


const Profil = () => (
  <div>
    <div id="edit-profile-form" className="dialog-box">
      <div >
        <h1>Modifier mon profil</h1>
      </div>
      <div className="profil-wrapper">
        <div className="profile">
          <form className="form-profil">
            {/* Photo */}
            <fieldset>
              <legend>Votre avatar</legend>
              <div className="flex-2">
                <span className="photo" title="Upload your Avatar!" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Nom de compte</legend>
              <div className="flex-2">
                <input type="text" id="username" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Email</legend>
              <div className="flex-2">
                <input type="text" id="Email" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Mot de passe</legend>
              <div className="flex-2">
                <input type="password" id="password" />
              </div>
            </fieldset>
            <fieldset>
              <input type="button" className="Btn cancel" defaultValue="Cancel" />
              <input type="submit" className="Btn" defaultValue="Save Changes" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div >
)
export default Profil


