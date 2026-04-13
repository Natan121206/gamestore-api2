const { z } = require('zod');

// Definindo o schema de validação
const gameSchema = z.object({
    titulo: z.string().min(1, "O título é obrigatório"),
    desenvolvedora: z.string().min(1, "A desenvolvedora é obrigatória"),
    anoLancamento: z.number().int().min(1950).max(2026),
    genero: z.string().min(1, "O gênero é obrigatório")
});

// Middleware que valida os dados
const validateGame = (req, res, next) => {
    try {
        gameSchema.parse(req.body); // Se falhar, lança um erro
        next(); // Se passar, segue para o controller
    } catch (err) {
        res.status(400).json({ 
            message: "Erro de validação", 
            details: err.errors.map(e => e.message) 
        });
    }
};

module.exports = validateGame;