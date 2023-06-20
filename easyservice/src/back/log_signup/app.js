const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./Routes/user'); // Route utilisé pour gestion user

const app = express();

mongoose.connect('mongodb+srv://rva:Cesi2023@cluster1.9quyo8a.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !')); // Chaine connexion a la bdd mongoDB



app.use('/api/auth', userRoutes); 

  
module.exports = app;
