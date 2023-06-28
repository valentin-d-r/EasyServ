import React from 'react';
import '../style/Profil.css';
import chat from "../LogoChat.png";
import photo from "../photo.png";
const Profil = () => {
  const handleChatClick = () => {
    // Rediriger vers la page de chat
    window.location.href = './chat';
  };

  const handleEditClick = () => {
    // Rediriger vers la page d'édition de profil
    window.location.href = './profil-edit';
  };

  const handleDeleteClick = () => {
    // Supprimer le profil (logique de suppression ici)
    alert('Profil supprimé avec succès');
  };

  return (
    <div className="profil-container">
      <div className="profil-details">
        <div className="profil-picture">
          <img src={photo} alt="Photo de profil" />
        </div>
        <div className="profil-info">
          <h2>Roy Amaury</h2>
          <p>Amaury.roy@viacesi.fr</p>
        </div>
      </div>
      <div className="profil-actions">
        <div className="chat-icon" onClick={handleChatClick}>
          <img src={chat} alt="Chat" />
        </div>
        <button className="edit-button" onClick={handleEditClick}>
          Modifier Profil
        </button>
        <button className="delete-button" onClick={handleDeleteClick}>
          Supprimer Profil
        </button>
      </div>
    </div>
  );
};

export default Profil;
