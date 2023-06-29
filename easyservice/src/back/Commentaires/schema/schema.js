const mongoose = require('mongoose');

const commentaireSchema = mongoose.Schema({
    comId: { type: String, required: true },
    auteurId: {type: String, required: false},
    serviceId: {type: String, required: false, ref: 'Service'},
    contenu: { type: String },
    note: { type: int, ref: 'Prestataire'},
    dateCreation: {
        type: Date, default: Date.now }
   

});

module.exports = mongoose.model('Commentaire', commentaireSchema, 'Commentaire');