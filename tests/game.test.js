const request = require('supertest');
const express = require('express');
const gameRoutes = require('../routes/gameRoutes');
const sequelize = require('../config/database');
const Game = require('../models/Game');

const app = express();
app.use(express.json());
app.use('/api/games', gameRoutes);

beforeAll(async () => {
    await sequelize.sync({ force: true }); // Limpa o banco antes dos testes
});

afterAll(async () => {
    await sequelize.close(); // Fecha a conexão após os testes
});

describe('Game API Endpoints', () => {
    it('deve listar todos os jogos (deve retornar um array)', async () => {
        const res = await request(app).get('/api/games');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('deve criar um novo jogo com sucesso', async () => {
        const res = await request(app)
            .post('/api/games')
            .send({
                titulo: "Teste Jest",
                anoLancamento: 2024,
                genero: "Indie"
            });
        // Nota: Se sua rota POST tiver o middleware 'auth', 
        // esse teste vai falhar com 401 até você passar o token.
        expect(res.statusCode).toEqual(201);
        expect(res.body.titulo).toBe("Teste Jest");
    });
});