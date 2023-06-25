const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const Sqlqueries = require('../Models/user');


function checkEmailUniqueness(email) { 
    return new Promise((resolve, reject) => {
      var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "easyservice"
      });
      
      let sql = "SELECT COUNT(*) as count FROM utilisateur WHERE mail = ?;";
      
  
      con.query(sql, email , (error, results) => {
        if (error) {
          reject(error);
        } 

        else {
          console.log("result check :");
          console.log(results);      
          const count = results[0].count;

          if (count > 0) {          // Compte le nombre de retour du count pour vois si mail existant
            reject(new Error('Cet email est déjà utilisé'));
            con.end((error) => {
              if (error) {
                  console.error('Erreur lors de la fermeture de la connexion :', error);
              } else {
                  console.log('Connexion fermée avec succès');
              }
              });            
          } 
          
          else {
            resolve();
            con.end((error) => {
              if (error) {
                  console.error('Erreur lors de la fermeture de la connexion :', error);
              } else {
                  console.log('Connexion fermée avec succès');
              }
              });
          }
        }
      });
    });
  };        //fonction check si le mail est deja utilisé
  

 exports.signup = (req, res, next) => {
    
    var queries = Sqlqueries(req);
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "easyservice"
      });
       
    
    console.log("---->insertUser");
    console.log(queries.insertUser);
    console.log("----->selectuser");
    console.log(queries.selectUser);

    
    console.log(req.body.mail);

    checkEmailUniqueness(req.body.mail)
      .then(() => {

        con.query(queries.insertUser, function (err, result) {
            if (err) throw err;
            console.log("------>result");
            console.log(result);
          });   //Insertion dans la bdd

        con.end((error) => {
        if (error) {
            console.error('Erreur lors de la fermeture de la connexion :', error);
        } else {
            console.log('Connexion fermée avec succès');
        }
        });     //Fermeture de la connexion

        res.status(200).json({ message: 'Adresse e-mail valide' }); //Envoi du message validation

      })

      .catch(error => {

            // Une erreur s'est produite, y compris le cas où l'e-mail est déjà utilisé
            console.log("-------> erreur");
            console.log(error);
            res.status(409).json({ error: error.message });

            con.end((error) => {
            if (error) {
                console.error('Erreur lors de la fermeture de la connexion :', error);
            } else {
                console.log('Connexion fermée avec succès');
            }
            });

      });

};          // Fonction de création d'utilisateur



exports.login = (req, res, next) => {

    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "easyservice"
      });
    
    var queries = Sqlqueries(req);

    console.log("----->queries");
    console.log(queries.selectUser);
    con.query(queries.selectUser, function (err, result) {
        if (err){ 
            res.status(409).json({ error: "Echec de fermeture de connexion" });
            throw err;
        }
        if (!result || result.length === 0){
          return res.status(404).json({message: "Utilisateur introuvable"});

        }
        
        bcrypt.compare(req.body.password, result[0].password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' }); //Message a renvoyer en combinaison incorect
                    }
                    res.status(200).json({
                        userId: result[0].id,
                        token: jwt.sign(
                            { userId: result[0].id },
                            'chiffrement',  //Clé de chiffrement du token
                            { expiresIn: '24h' })
                    });
                    console.log("Connexion réussi !");
                })
                .catch(error => res.status(500).json({ error }));

    
        //res.status(200).json({ message: 'Adresse e-mail valide' });
    });

    con.end((error) => {
        
        if (error) {
            console.error('Erreur lors de la fermeture de la connexion :', error);
            
        } else {
            console.log('Connexion fermée avec succès');
            
        }
    });
        



    // User.findOne({ email: 'valentin@hotmail.fr' })
    //     .then(user => {
    //         if (!user) {
    //             return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});  // Si user inexistant alors renvoyer ce messae
    //         }
    //         bcrypt.compare('1234', user.password)
    //             .then(valid => {
    //                 if (!valid) {
    //                     return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' }); //Message a renvoyer en combinaison incorect
    //                 }
    //                 res.status(200).json({
    //                     userId: user._id,
    //                     token: jwt.sign(
    //                         { userId: user._id },
    //                         'chiffrement',  //Clé de chiffrement du token
    //                         { expiresIn: '24h' })
    //                 });
    //             })
    //             .catch(error => res.status(500).json({ error }));
    //     })
    //     .catch(error => res.status(500).json({ error }));
 };         // Fonction de login


exports.modifyUser = (req, res, next) => {

    var queries = Sqlqueries(req);
    console.log(queries.updateUser);
    

    var con = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "easyservice"
    });

    con.query(queries.updateUser, function (err, result) {
      if (err) {
          console.error('Erreur lors de l\'exécution de la requête:', err);
          res.status(500).json({error: 'Erreur lors de la modification de l\'utilisateur'});
          return;
      }

      res.status(200).json({message: "Modification réaliser"});

      con.end((error) => {
          if (error) {
              console.error('Erreur lors de la fermeture de la connexion :', error);
          } else {
              console.log('Connexion fermée avec succès');
          }
      });
  });

};

exports.deleteUser = (req,res, next) => {

    var queries = Sqlqueries(req);
    console.log(queries.deleteUser);
    

    var con = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "easyservice"
    });

    con.query(queries.deleteUser, function (err, result) {
      if (err) {
          console.error('Erreur lors de l\'exécution de la requête:', err);
          res.status(500).json({error: 'Erreur lors de la suppression de l\'utilisateur'});
          return;
      }

      res.status(200).json({message: "Suppression réaliser"});

      con.end((error) => {
          if (error) {
              console.error('Erreur lors de la fermeture de la connexion :', error);
          } else {
              console.log('Connexion fermée avec succès');
          }
      });
  });

};