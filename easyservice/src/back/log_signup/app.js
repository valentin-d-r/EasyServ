const express = require('express');


const userRoutes = require('./Routes/user'); // Route utilisé pour gestion user

const app = express();

app.use(express.json());
app.use('/api/auth', userRoutes); //Appel de userRoutes du ficher routes/user.js

  
module.exports = app;
