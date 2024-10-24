// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rotas (Exemplo)
app.get('/api/dados', (req, res) => {
  // Lógica para buscar dados no banco
  res.send('Dados da API');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
