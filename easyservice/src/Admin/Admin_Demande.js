import React from 'react';
import '../style/Admin_Demande.css';

const DashboardDemande = () => {
    const demandes = [
        { id: 1, client: 'John Doe', prestataire: 'Prestataire 1', statut: 'En cours' },
        { id: 2, client: 'Jane Smith', prestataire: 'Prestataire 2', statut: 'Terminé' },
        // Ajoutez d'autres demandes ici
    ];

    const handleEdit = (id) => {
        // Logique de gestion de l'édition de la demande avec l'ID donné
    };

    const handleDelete = (id) => {
        // Logique de gestion de la suppression de la demande avec l'ID donné
    };

    return (
        <div>
            <h1 id='dashdmd'>Dashboard Demande</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Client</th>
                        <th>Prestataire</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {demandes.map((demande) => (
                        <tr key={demande.id}>
                            <td>{demande.id}</td>
                            <td>{demande.client}</td>
                            <td>{demande.prestataire}</td>
                            <td>{demande.statut}</td>
                            <td>
                                <button className="dashdemande-edit-button" onClick={() => handleEdit(demande.id)}>Modifier</button>
                                <button className="dashdemande-delete-button" onClick={() => handleDelete(demande.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardDemande;
