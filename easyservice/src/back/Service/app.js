const express = require('express');
const mongoose = require('mongoose');


const serviceRoutes = require('./Routes/routes'); // Route utilisé pour gestion user

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://rva:Cesi2023@cluster1.9quyo8a.mongodb.net/easyservice?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/api/service', serviceRoutes); //Appel de userRoutes du ficher routes/user.js

  
module.exports = app;