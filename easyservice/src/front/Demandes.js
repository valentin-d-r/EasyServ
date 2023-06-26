import '../style/Demandes.css'
import React, { useState } from 'react';

const Demandes = () => {
  const [request, setRequest] = useState({
    clientName: '',
    description: '',
    // Autres champs de demande
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement de la soumission de la demande ici
    console.log(request);
  };

  return (
    <div>
      <h1>Modifier la demande du client</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom du client:
          <input
            type="text"
            name="clientName"
            value={request.clientName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            id='demandestxtarea'
            name="description"
            value={request.description}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Autres champs de demande */}
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default Demandes;

