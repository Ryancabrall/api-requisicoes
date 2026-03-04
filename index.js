const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rota de Saudação (GET)
app.get('/saudacao', (req, res) => {
    const nome = req.query.nome;
    if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    res.json({ message: `Olá ${nome}` });
});

// Rota de IMC (POST)
app.post("/imc", (req, res) => {
    const { nome, idade, peso, altura } = req.body;
    if (!nome || !idade || !peso || !altura) {
        return res.status(400).json({ error: "Dados incompletos" });
    }
    const imc = peso / (altura * altura);
    res.json({
        nome,
        idade,
        peso,
        altura,
        imc: imc.toFixed(2) // Arredondado para 2 casas decimais
    });
});

// --- NOVA ROTA: Alistamento ---
app.post("/alistamento", (req, res) => {
    const { nome, idade, sexo } = req.body;

    if (!nome || !idade || !sexo) {
        return res.status(400).json({ error: "Nome, idade e sexo são obrigatórios" });
    }

    let status = "";
    const sexoNormalizado = sexo.toLowerCase();

    if (sexoNormalizado === 'masculino' || sexoNormalizado === 'm') {
        if (idade === 18) {
            status = "Está na hora de se alistar!";
        } else if (idade > 18) {
            status = "Já passou do tempo de alistamento (verifique sua situação).";
        } else {
            status = "Ainda não chegou a sua vez de se alistar.";
        }
    } else {
        status = "O alistamento não é obrigatório para o seu perfil.";
    }

    res.json({
        nome,
        idade,
        sexo,
        mensagem: status
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});