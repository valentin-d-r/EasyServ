import React from 'react';
import '../style/Admin_Client.css';
const DashboardClient = () => {
    const clients = [
        { id: 1, nom: 'John Doe', note: 4.5 },
        { id: 2, nom: 'Jane Smith', note: 4.2 },
        // Ajoutez d'autres clients ici
    ];

    const handleEdit = (id) => {
        // Logique de gestion de l'édition du client avec l'ID donné
    };

    const handleDelete = (id) => {
        // Logique de gestion de la suppression du client avec l'ID donné
    };

    return (
        <div>
            <h1 id='dashclient'>Dashboard Client</h1>
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
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.nom}</td>
                            <td>{client.note}</td>
                            <td>
                                <button className="dashclient-edit-button" onClick={() => handleEdit(client.id)}>Modifier</button>
                                <button className="dashclient-delete-button" onClick={() => handleDelete(client.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardClient;
