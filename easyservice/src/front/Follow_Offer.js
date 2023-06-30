import React from 'react';
import '../style/Follow_Offer.css';

const Follow_Offer = () => {
    const services = [
        {
            id: 1,
            nom: 'Service 1',
            description: 'Description du service 1',
            etat: 'Pas accepté',
        },
        {
            id: 2,
            nom: 'Service 2',
            description: 'Description du service 2',
            etat: 'En cours',
        },
        {
            id: 3,
            nom: 'Service 3',
            description: 'Description du service 3',
            etat: 'Terminé',
        },
        // Ajoutez d'autres services ici...
    ];
    return (
        <div className="Follow_Offer-container">
            <h1 id='followh1'>Avancement des services</h1>
            <table className="Follow_Offer-table">
                <thead>
                    <tr>
                        <th>Nom de la demande</th>
                        <th>Description</th>
                        <th>État</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.id}>
                            <td>{service.nom}</td>
                            <td>{service.description}</td>
                            <td>{service.etat}</td>
                            <td>
                                <button className="Follow_Offer-edit-button">Modifier</button>
                                <button className="Follow_Offer-delete-button">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Follow_Offer;