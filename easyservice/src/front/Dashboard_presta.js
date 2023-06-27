import React from 'react';
import '../style/Dashboard_presta.css';

const Dashboard_presta = () => {
    const demandes = [
        {
            id: 1,
            nomClient: 'Client 1',
            descriptionDemande: 'Description de la demande 1',
            accepte: false,
            refuse: false,
        },
        {
            id: 2,
            nomClient: 'Client 2',
            descriptionDemande: 'Description de la demande 2',
            accepte: false,
            refuse: false,
        },
        {
            id: 3,
            nomClient: 'Client 3',
            descriptionDemande: 'Description de la demande 3',
            accepte: false,
            refuse: false,
        },

        // Ajoutez d'autres demandes ici...
    ];
    const handleAccepterDemande = (demandeId) => {
        // Logique pour accepter la demande
        console.log(`Demande ${demandeId} acceptée`);
    };
    const handleRefuserDemande = (demandeId) => {
        // Logique pour refuser la demande
        console.log(`Demande ${demandeId} refusée`);
    };
    return (
        <div className="Dashboard_presta-container">
            <h1>Tableau des demandes</h1>
            <table className="Dashboard_presta-table">
                <thead>
                    <tr>
                        <th>Nom du client</th>
                        <th>Description de la demande</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {demandes.map((demande) => (
                        <tr key={demande.id}>
                            <td>{demande.nomClient}</td>
                            <td>{demande.descriptionDemande}</td>
                            <td>
                                {!demande.accepte && !demande.refuse && (
                                    <>
                                        <button
                                            className="Dashboard_presta-accepter-button"
                                            onClick={() => handleAccepterDemande(demande.id)}
                                        >
                                            Accepter
                                        </button>
                                        <button
                                            className="Dashboard_presta-refuser-button"
                                            onClick={() => handleRefuserDemande(demande.id)}
                                        >
                                            Refuser
                                        </button>
                                    </>
                                )}
                                {demande.accepte && <span className="Dashboard_presta-status">Acceptée</span>}
                                {demande.refuse && <span className="Dashboard_presta-status">Refusée</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard_presta;