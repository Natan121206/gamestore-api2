const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes');
const app = express();

app.use(express.json());

// Conexão com MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/gamestore')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro de conexão:', err));

// Usando o arquivo de rotas
app.use('/api/games', gameRoutes);

// Tratamento de erros genérico
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo deu errado no servidor!' });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));