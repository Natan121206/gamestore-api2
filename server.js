require('dotenv').config(); // Carrega as variáveis de ambiente (JWT_SECRET)
const express = require('express');
const cors = require('cors'); // Ótimo para permitir acessos de diferentes origens
const gameRoutes = require('./routes/gameRoutes');
const errorHandler = require('./middlewares/errorHandler');
const sequelize = require('./config/database');
const Publisher = require('./models/Publisher');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Sincronização do SQLite
sequelize.sync({ force: false }).then(() => {
    console.log('Banco de dados SQLite conectado e sincronizado');
}).catch(err => {
    console.error('Erro ao sincronizar banco de dados:', err);
});

// Rotas
app.use('/api/games', gameRoutes);

// O middleware de erro DEVE vir após todas as rotas
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));