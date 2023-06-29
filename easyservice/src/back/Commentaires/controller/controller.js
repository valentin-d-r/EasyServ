const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const schema = require('../models/routes');

exports.addComment = (req,res, next) => {

    comData = {
        auteurId,
        contenu,
        serviceId
    };

    const Comment = new schema(comData);
    Comment.save()
    .then(() => {
        res.status(201).json({ message: "Objet enregistée !"});
        console.log("Objet enregistré");
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error});

    });

};

exports.addLike = (req, res, next ) => {
    likeData = {
        serviceId,
        note
        
    };

    const Like = new schema(likeData);
    Like.save()
    .then(() => {
        res.status(201).json({ message: "Objet enregistée !"});
        console.log("Objet enregistré");
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error});

    });

};

exports.showComment = (req, res, next) => {
    const idService = req.params.id;

    schema.find({ serviceId: idService })
    .then(result => {
        res.status(200).json({ result });
    })
    .catch(err => {
        res.status(500).json({ err });
    });

}; // Mettre id du service pour sortir tout les commentaires du service


exports.deleteComment = (req, res, next) => {
    const idComment = req.params.id;

    const idService = req.params.id;
        console.log("--> Idservice");
        console.log(idService);     

        schema.deleteOne({ _id: id })
            .then(result => {
                res.status(200).json({ message: 'Document supprimé', result});
            })
            .catch(err => {
                res.status(500).json({ err });
            });

};

