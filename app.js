const express = require('express');
const bodyParser = require ('body-parser');
const userControler = require('./Controlers/userControler');
const app = express();

//configura o ejs como mecanismo de visualização
app.set('view engine', 'ejs');

//middleware para parsing do body
app.use(bodyParser.urlencoded({extend: false}));

//rotas
app.get('/', userControler.getAllUsers);

app.get('/edit/:id', userControler.getUserById);
app.post('/edit/:id',userControler.updateUser);

//iniciar o server
app.listen(3000,() => {
    console.log('Servidor rodando na porta 3000');
});