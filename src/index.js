require('dotenv').config();
const express = require('express');

const app = express();
const porta = process.env.PORT || 3000;
const rota = require('./rotas/rota');
app.use(rota);
app.use(express.json());

app.listen(porta, () => console.log(`Rodando em https://https-patriciafraga-github-io-deployteste.onrender.com/${porta}`));