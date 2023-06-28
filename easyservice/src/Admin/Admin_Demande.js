import React from 'react';
import '../style/Admin_Demande.css';


export function IconParkTwotoneClick(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><mask id="ipTClick0"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M24 4v8"></path><path fill="#555" fillRule="evenodd" d="m22 22l20 4l-6 4l6 6l-6 6l-6-6l-4 6l-4-20Z" clipRule="evenodd"></path><path d="m38.142 9.858l-5.657 5.657M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657"></path></g></mask><path fill="#0095e7" d="M0 0h48v48H0z" mask="url(#ipTClick0)"></path></svg>
    )
}
export function IconParkTwotoneShopping(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><mask id="ipTShopping0"><g fill="none"><path fill="#555" d="M39 32H13L8 12h36l-5 20Z"></path><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20H8Z"></path><circle cx="13" cy="39" r="3" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></circle><circle cx="39" cy="39" r="3" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></circle></g></mask><path fill="#0095e7" d="M0 0h48v48H0z" mask="url(#ipTShopping0)"></path></svg>
    )
}

export function IconParkOutlineCustomer(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><g fill="#0095e7" fillRule="evenodd" clipRule="evenodd"><path d="M8.609 36.987C5.32 33.378 3.32 28.614 3.32 23.39c0-11.264 9.297-20.395 20.765-20.395c11.467 0 20.764 9.131 20.764 20.395c0 7.965-4.65 14.86-11.427 18.218a29.984 29.984 0 0 1-13.898 3.387c-6.152 0-11.868-1.839-16.608-4.987c0 0 3.179-.347 5.69-3.022h.002Zm25.23-3.502c5.373-5.371 5.373-14.08 0-19.453a13.703 13.703 0 0 0-8.96-4.007c-.098-2.447 1.219-4.099 1.225-4.107h-.001l.001-.001a19.71 19.71 0 0 0-10.228 5.439a19.721 19.721 0 0 0-4.755 7.641c.138-.366.293-.728.463-1.084c-.196.5-.373 1.01-.533 1.532c-1.573 4.776-.463 10.242 3.335 14.04c5.372 5.372 14.082 5.372 19.454 0Z"></path><path d="M17.13 22.345v2.847a2.057 2.057 0 1 0 4.114 0v-2.847a2.057 2.057 0 1 0-4.114 0Zm10.183 0v2.847a2.057 2.057 0 0 0 4.114 0v-2.847a2.057 2.057 0 0 0-4.114 0Z"></path></g></svg>
    )
}

export function MdiHumanMaleBoard(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="#0095e7" d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2H15M8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2Z"></path></svg>
    )
}
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
            <div className="image-section">
                <div className="image-container">
                    <IconParkTwotoneClick width={50} height={50} />
                    <div>Nombre de visite :</div>
                </div>
                <div className="image-container">
                    <IconParkTwotoneShopping width={50} height={50} />
                    <div>Demande en cours :</div>
                </div>
                <div className="image-container">
                    <IconParkOutlineCustomer width={50} height={50} />
                    <div>Client inscrit :</div>
                </div>
                <div className="image-container">
                    <MdiHumanMaleBoard width={50} height={50} />
                    <div>Prestataire inscrit :</div>
                </div>
            </div>
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
