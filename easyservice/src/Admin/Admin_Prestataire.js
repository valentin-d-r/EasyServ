import React from 'react';
import '../style/Admin_Prestataire.css';
const DashboardPrestataire = () => {
    const prestataires = [
        { id: 1, nom: 'John Doe', note: 4.5 },
        { id: 2, nom: 'Jane Smith', note: 4.2 },
        // Ajoutez d'autres prestataires ici
    ];

    const handleEdit = (id) => {
        // Logique de gestion de l'édition du prestataire avec l'ID donné
    };

    const handleDelete = (id) => {
        // Logique de gestion de la suppression du prestataire avec l'ID donné
    };

    return (
        <div>
            <h1 id='dashpresta'>Dashboard Prestataire</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prestataires.map((prestataire) => (
                        <tr key={prestataire.id}>
                            <td>{prestataire.id}</td>
                            <td>{prestataire.nom}</td>
                            <td>{prestataire.note}</td>
                            <td>
                                <button className="dashpresta-edit-button" onClick={() => handleEdit(prestataire.id)}>Modifier</button>
                                <button className="dashpresta-delete-button" onClick={() => handleDelete(prestataire.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardPrestataire;
