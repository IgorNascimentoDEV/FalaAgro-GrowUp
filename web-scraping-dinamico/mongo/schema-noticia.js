const mongoose = require('mongoose')

const noticia = mongoose.model(
    'noticia',
    mongoose.Schema({
        titulo:String,
        dataNoticia:String,
        textoNoticia:[],
        autorNoticia:String
    })
);
module.exports = noticia;