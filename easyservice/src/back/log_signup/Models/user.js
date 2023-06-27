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
  
  function createInsertQuery() {
    const passwordCrypt = bcrypt.hashSync(user.Password, 10);
    let sql = "INSERT INTO utilisateur (firstname, surname, mail, password, role) VALUES (?, ?, ?, ?, ?);";
    const inserts = [user.Firstname, user.Surname, user.Mail, passwordCrypt, user.Role];
    return mysql.format(sql, inserts);
  };
  
  function createSelectQuery() {
    let sql = "SELECT * FROM utilisateur WHERE mail = ?;";
    const insertMail = [user.Mail];
    return mysql.format(sql, insertMail);
  };
  
  function createCountQuery() {
    let sql = "SELECT COUNT(*) as count FROM utilisateur WHERE mail = ?;";
    const insertMail = [user.Mail];
    return mysql.format(sql, insertMail);
  };

  function createUpdateQuery() {
    const passwordCrypt = bcrypt.hashSync(user.Password, 10);
    let sql = "UPDATE utilisateur SET firstname = ?, surname = ?, mail = ?, password = ? WHERE id = ?; " ;
    const inserts = [user.Firstname, user.Surname, user.Mail, passwordCrypt, req.params.id];
    return mysql.format(sql, inserts);
  };

  function createDeleteQuery() {
    
    let sql = "DELETE FROM utilisateur WHERE id = ?;" ;
    const inserts = [req.params.id];
    return mysql.format(sql, inserts);
  };
  

  return {
    insertUser: createInsertQuery(),
    selectUser: createSelectQuery(),
    countUser: createCountQuery(),
    updateUser: createUpdateQuery(),
    deleteUser: createDeleteQuery()
  };
};

module.exports = Sqlqueries;

