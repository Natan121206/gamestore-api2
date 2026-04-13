module.exports = (err, req, res, next) => {
    console.error(err);
    // Erro de ID inválido do MongoDB
    if (err.name === 'CastError') return res.status(400).json({ message: "ID inválido" });
    // Erro de validação do Mongoose
    if (err.name === 'ValidationError') return res.status(400).json({ message: err.message });
    
    res.status(500).json({ message: "Erro interno do servidor" });
};