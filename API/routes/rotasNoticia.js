const router = require('express').Router()

const Noticia = require('../model/Noticia')

//rotas / endpoint 

//LEITURA
router.get("/noticias", async(req, res)=>{
    res.status = 200;
    res.json({message: "olá express!"})
});

//CRIANDO DADOS
router.post('/', async(req, res) =>{

  const {title, dataNoticia, textoNoticia, autorNoticia} = req.body

  if(!title){
    res.status(422).json({error: 'Campos obrigatorios!'})
  }

  const noticia = {
    title,
    dataNoticia,
    textoNoticia,
    autorNoticia
  }

  try {
    await Noticia.create(noticia);
    res.status(201).json({message: 'noticia insirida com sucesso'})
  } catch (error) {
    res.status(500).json({error: error});
  }
})  

module.exports = router;