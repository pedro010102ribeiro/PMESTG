const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Carregar os dados da escola
const escolaData = path.join(__dirname, 'escolas.json');
fs.readFile(escolaData, (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  
  const escola = JSON.parse(data);

  // Definir rota para servir os dados
  app.get('/escolas', (req, res) => {
    res.json(escola);
  });

  // Iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});
