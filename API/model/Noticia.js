const mongoose = require('mongoose');

const Noticia = mongoose.model('Noticia',{
    title: String,
    dataNoticia: String,
    textoNoticia: [],
    autorNoticia: String,   
})

module.exports = Noticia;