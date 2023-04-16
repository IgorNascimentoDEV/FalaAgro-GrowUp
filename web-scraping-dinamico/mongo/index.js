const pup = require('puppeteer');
const mongoose = require('mongoose');
const noticia = mongoose.model(
    'noticia',
    mongoose.Schema({
        titulo:String,
        dataNoticia:String,
        textoNoticia:[],
        autorNoticia:String
    })
);
const url = "https://www.embrapa.br/busca-de-noticias/-/noticia/todos?";

mongoose.connect('mongodb://localhost:27017/Noticia', {
    useNewUrlParser: true, 

    useUnifiedTopology: true 
})
.then(result =>{
    console.log('conexão feita!')
})
.catch(error =>{
    console.log('Deu ruim' + error)
})

function salvandoNoticia(dados){
    const novaNoticia = new noticia({
        titulo: dados.titulo,
        dataNoticia: dados.dataNoticia,
        textoNoticia: dados.textoNoticia,
        autorNoticia: dados.autorNoticia
    })

    novaNoticia.save();
}

let c = 1;
( async () => {
    const browser = await pup.launch({headless: true});
    const page = await browser.newPage();
    console.log('Inicie!');

    await page.goto(url);

    console.log('fui para url!');

    const links = await page.$$eval('.titulo > a', el => el.map(link => link.href))

    for(const link of links){
        console.log('Pagina ', c);
        await page.goto(link);

        const titulo = await page.$eval('.titulo', element => element.innerText);
        const dataNoticia = await page.$eval('.data', date => date.innerText);
        const autorNoticia = await page.$eval('.autor > .negrito', autor => autor.innerText);
        const textoNoticia = await page.$$eval('.texto-noticia > p', par => par.map(p => p.innerText));

        const obj = {titulo, dataNoticia, textoNoticia, autorNoticia};
        //console.log(obj)
        salvandoNoticia(obj)
        c++;
    }

    await page.waitForTimeout(300);
    await browser.close();
})();
