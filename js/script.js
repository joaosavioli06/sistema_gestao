const { connectionToDatabase, connection } = require('./dbConnection');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

connectionToDatabase();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   const indexPath = path.join(__dirname, '..', 'index.html');
   res.sendFile(indexPath);
});


app.post("/", (req, res) => {
    const formData = req.body;
    userNickname = req.body.nome;
    userEmail = req.body.email;
    userPasskey = req.body.password;

    const sqlQuery = "INSERT INTO informacoes_usuario (NICKNAME, EMAIL, PASSKEY) VALUES (?, ?, ?)";
    connection.query(sqlQuery, [userNickname, userEmail, userPasskey], (err, result) => {
        if (err){
            console.log('Erro executando query');
            console.log(err)
            res.status(500).send('Erro 500');
        }else{
            console.log('Registro feito')
            res.send('Feito!')
        }
    })
});

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});