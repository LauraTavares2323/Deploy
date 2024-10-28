const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10741107',
    password: 'vy9Fk41G1g',
    database: 'sql10741107'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

// Rota para adicionar nome e sobrenome
app.post('/add', (req, res) => {
    const { nome, sobrenome } = req.body;
    const sql = 'INSERT INTO nomes (nome, sobrenome) VALUES (?, ?)';
    db.query(sql, [nome, sobrenome], (err, result) => {
        if (err) throw err;
        res.status(201).json({ id: result.insertId, nome, sobrenome });
    });
});

// Rota para obter todos os nomes
app.get('/nomes', (req, res) => {
    db.query('SELECT * FROM nomes', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
