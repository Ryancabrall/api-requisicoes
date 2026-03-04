const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/saudacao', (req, res) => {
    const nome = req.query.nome;
    if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' })
    }
    res.json({ message: `Olá ${nome}` });
});

app.post("/imc", (req, res) => {
    const { nome, idade, peso, altura } = req.body;
    if (!nome || !idade || !peso || !altura) {
        return res.status(400).json({ error: "dados incompletos" })
    }
    const imc = peso / (altura * altura);
    res.json({
        nome: "ryan",
        idade: 22,
        peso: 70,
        altura: 1.75,
        imc: imc });
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/saudacao', (req, res) => {
    const nome = req.query.nome;
    if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' })
    }
    res.json({ message: `Olá ${nome}` });
});

app.post("/imc", (req, res) => {
    const { nome, idade, peso, altura } = req.body;
    if (!nome || !idade || !peso || !altura) {
        return res.status(400).json({ error: "dados incompletos" })
    }
    const imc = peso / (altura * altura);
    res.json({
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc });
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});