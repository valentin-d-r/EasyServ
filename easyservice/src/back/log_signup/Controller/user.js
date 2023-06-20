const bcrypt = require('bcrypt');
const User = require('../Models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash('1234', 10).then(hash => {
        const user = new User({
          email: 'valentin@hotmail.fr',
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
    

}; // Fonction de création d'utilisateur


exports.login = (req, res, next) => {
    User.findOne({ email: 'valentin@hotmail.fr' })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});  // Si user inexistant alors renvoyer ce messae
            }
            bcrypt.compare('1234', user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' }); //Message a renvoyer en combinaison incorect
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'chiffrement',  //Clé de chiffrement du token
                            { expiresIn: '24h' })
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };     // Fonction de login
