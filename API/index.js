const express = require('express');
const mongoose = require('mongoose');
const app = express();


//configurando leitura json
app.use(
  express.urlencoded({
    extended: true,
  }),     
)
app.use(express.json())

//rotas da api
const rotasNoticia = require('./routes/rotasNoticia')

app.use('/noticia', rotasNoticia)


//configurando porta e conexão com o banco de dados
mongoose.connect("mongodb://localhost:27017/Noticia", {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log("conexão feita!");
      app.listen(3000)
    })
    .catch((error) => {
      console.log("Erro ao conectar" + error);
    });
