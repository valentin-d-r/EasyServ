const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const schema = require('../Models/models');

exports.addService = (req, res, next) => {

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
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; //psk c'est un bearer

    if (!token) {
        return res.sendStatus(401).json(error); 
    }

    jwt.verify(token, 'chiffrement', (err, decoded) => {
        if (err) {
            return res.sendStatus(403).json(err); 
        }
        
        const idService = decoded.idService;
        console.log("--> Idservice");
        console.log(idService);
        
        const update = req.body;
        console.log("---> Update");
        console.log(update);
       

        schema.updateOne({ _id: idService }, update)
            .then(result => {
                res.json({ message: 'Document mis à jour', result });
            })
            .catch(err => {
                res.status(500).json({ err });
            });


        
    });


};

exports.showAllServices = (req, res, next) => {
    schema.find()
    .then((results) => {
        console.log(results);
        res.status(200).json({results});
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({message: error});
    });

};

exports.deleteService = (req, res, next) => {
    
        
        const idService = decoded.idService;
        console.log("--> Idservice");
        console.log(idService);
        
        const update = req.body;
        console.log("---> Update");
        console.log(update);
       

        schema.deleteOne({ _id: idService })
            .then(result => {
                res.json({ message: 'Document supprimé', result});
            })
            .catch(err => {
                res.status(500).json({ err });
            });


        
    };



exports.showToken = (req, res, next) => {
    console.log("--->Token");
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; //psk c'est un bearer 
    console.log(token);

    if (!token) {
        return res.sendStatus(401).json(error); 
    }

    jwt.verify(token, 'chiffrement', (err, decoded) => {
        if (err) {
            return res.sendStatus(403).json(err); 
        }

        const userId = decoded.id;
        const role = decoded.role;

        console.log("--->Id");
        console.log(userId);
        console.log(role);
        res.status(200).json({message: "Requete reussi"});
    });

    console.log('Fin de code');


};

