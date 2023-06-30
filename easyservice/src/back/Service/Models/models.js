const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    clientId: { type: String, required: true },
    titre: {type: String, required: true},
    description: {type: String, required: true},
    status: { type: String, enum: ['en attente', 'acceptée', 'en cours', 'terminée'], default: 'en attente' },
    prestataireId: { type: String, ref: 'Prestataire'},
    dateCreation: {
        type: Date, default: Date.now },
    dateModification: { type: Date }

});

module.exports = mongoose.model('Service', serviceSchema, 'Service');

