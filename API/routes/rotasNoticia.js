const router = require('express').Router()

const Noticia = require('../model/Noticia')

//rotas / endpoint 

//LEITURA
router.get("/noticia", async(req, res)=>{
    try {
      const noticias = Noticia.find();
      res.status(200).json(noticias);

    } catch (error) {
      res.status(500).json({error: error})
    }
});

//LEITURA POR ID
router.get('/:id', async(req, res) => {

  const id = req.params.id

  try {
    
    const noticia = await Noticia.findOne({_id: id})

    if(!noticia){
      res.status(422).json({error: "A noticia nao foi encontrada"})
      return
    }

    res.status(200).json(noticia)
    return

  } catch (error) {
    res.status(500).json({error: error})
  }
})

//CRIANDO DADOS
router.post('/noticia', async(req, res) =>{

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

//ATUALIZAR 
router.put('/:id', async(req, res) => {
  const id = req.params.id

  const {title, dataNoticia, textoNoticia, autorNoticia} = req.body

  const noticia = {
    title,
    dataNoticia,
    textoNoticia,
    autorNoticia
  }

  try {
    
    const updateNoticia = await Noticia.updateOne({_id: id}, noticia)

    if(updateNoticia.matchedCount === 0){
      res.status(422).json({error: "A noticia nao foi encontrada"})
      return
    }

    res.status(200).json(noticia)


  } catch (error) {
    res.status(500).json({error: error})
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  const id = req.params.id

  if(!noticia){
    res.status(422).json({error: "A noticia nao foi encontrada"})
    return
  }

  try {
    
    await Noticia.deleteOne({_id: id})
    res.status(200).json({message: "usuario removido com sucesso"}) 

  } catch (error) {
    res.status(500).json({error: error})
  }
})

module.exports = router;