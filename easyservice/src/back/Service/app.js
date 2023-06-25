const express = require('express');

const serviceRoutes = require('./Routes/routes'); // Route utilisé pour gestion user

const app = express();

app.use(express.json());
app.use('/api/service', serviceRoutes); //Appel de userRoutes du ficher routes/user.js

  
module.exports = app;