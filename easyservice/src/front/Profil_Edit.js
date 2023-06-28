import React, { useState } from 'react';
import '../style/Profil_Edit.css';

const ProfilEdit = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);

    const handlePhotoChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setPhoto(selectedPhoto);
        setPhotoPreview(URL.createObjectURL(selectedPhoto));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Envoyer les données modifiées au serveur

        // Réinitialiser les champs après la soumission
        setNom('');
        setEmail('');
        setMotDePasse('');
        setPhoto(null);
        setPhotoPreview(null);
    };

    return (
        <div className="profil-editcontainer">
            <h1 id='h1modifprofil'>Modifier Profil</h1>
            <form className="profil-edit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="photo">Photo de profil :</label>
                    {photoPreview ? (
                        <div className="photo-preview">
                            <img src={photoPreview} alt="Photo de profil" />
                        </div>
                    ) : null}
                    <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={(event) => setNom(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="motDePasse">Mot de passe :</label>
                    <input
                        type="password"
                        id="motDePasse"
                        value={motDePasse}
                        onChange={(event) => setMotDePasse(event.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="profil-edit-button">
                    Enregistrer les modifications
                </button>
            </form>
        </div>
    );
};

export default ProfilEdit;
