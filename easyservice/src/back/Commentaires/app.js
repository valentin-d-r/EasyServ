const express = require('express');


const userRoutes = require('./models/routes'); // Route utilisé pour gestion user

const app = express();

app.use(express.json());
app.use('/api/comment', userRoutes); //Appel de userRoutes du ficher routes/user.js

module.exports = app;
