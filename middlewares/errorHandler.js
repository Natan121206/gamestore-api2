module.exports = (err, req, res, next) => {
    console.error(err);
    // Erro de validação do Sequelize
    if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({ message: err.errors.map(e => e.message) });
    }
    res.status(500).json({ message: "Erro interno do servidor" });
};