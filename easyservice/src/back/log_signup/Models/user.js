const mysql = require('mysql');
const express = require('express');
const bcrypt = require('bcrypt');




function Sqlqueries(req) {
  
  var user = {
    Firstname: req.body.firstname,
    Surname: req.body.surname,
    Mail: req.body.mail,
    Password: req.body.password,
    Role: req.body.role
  };

  
  var passwordCrypt = bcrypt.hashSync(user.Password, 10);

  var sqlInsertUser = "INSERT INTO utilisateur (firstname, surname, mail, password, role) VALUES (?, ?, ?, ?, ?);";
  var inserts = [user.Firstname, user.Surname, user.Mail, passwordCrypt, user.Role];
  var sqlInsertUser = mysql.format(sqlInsertUser, inserts);

  var sqlSelectUser = "SELECT * FROM utilisateur WHERE mail = ?;";
  var insertMail = [user.Mail];
  var sqlSelectUser = mysql.format(sqlSelectUser, insertMail);

  var sqlCountUser = "SELECT COUNT(*) as count FROM utilisateur WHERE mail = ?;";
  var sqlCountUser = mysql.format(sqlCountUser, insertMail);


  return {
    insertUser: sqlInsertUser,
    selectUser: sqlSelectUser,
    countUser: sqlCountUser
  };
}

module.exports = Sqlqueries;

//Connexion MongoDb

/*
const insertDb = 
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   // var sql = "INSERT INTO user VALUES "+ Firstname+", "+ Surname + ", " + Mail + ", " + Password + ", " + role + ";";
    
  });
*/

/*

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});     // Creation du schéma pour le password mongodb                                        

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

*/