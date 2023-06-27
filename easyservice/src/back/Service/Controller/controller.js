const mongoose = require('mongoose');

const schema = require('../Models/models');

exports.addService = (req, res, next) => {

    // clientId: { type: int, required: true },
    // titre: {type: String, required: true},
    // description: {type: String, required: true},
    // status: { type: String, enum: ['en attente', 'acceptée', 'en cours', 'terminée'], default: 'en attente' },
    // prestataireId: { type: Schema.Types.ObjectId, ref: 'Prestataire'},
    // dateCreation: {
    //     type: Date, default: Date.now },
    // dateModification: { type: Date }
    serviceData = {
        clientId: req.body.clientId,
        titre: req.body.titre,
        description: req.body.description
        

    };

    console.log("---> Service");
    console.log(serviceData);
    const Service = new schema(serviceData);
    Service.save()
    .then(() => {
        res.status(201).json({ message: "Objet enregistée !"});
        console.log("Objet enregistré");
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error});

    });
    
};


exports.modifyService = (req, res, next) => { 

};

exports.showServices = (req, res, next) => {


};

