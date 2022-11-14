require('dotenv').config();
require('../database');

const express = require('express');
const cors = require('cors');
const routes = require('../../routes');

const app = express();

/* qualquer um pode fazer requisição na api no cors */
app.use(cors());
app.use(express.json({limit: '50mb'})); /* Aqui voce está pegando toda requizição em json */
app.use(routes);

module.exports = app;


