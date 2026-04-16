const jwt = require('jsonwebtoken');
exports.login = (req, res) => {
    // Exemplo simplificado: em produção, compare com o banco!
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
        const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: "Credenciais inválidas" });
};