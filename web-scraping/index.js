/**
 * quando: 20:56-08/04/2023
 * site: Embrapa
 * Titulos
 * detalhes
 * link: https://www.embrapa.br/busca-de-noticias/-/noticia/todos?
 */

const axios = require('axios')
const cheerio = require('cheerio')

const url ='https://www.embrapa.br/busca-de-noticias/-/noticia/todos?'


async function getNoticias(){
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const list = []
    $('.table tbody tr td').each((i,elem)=>{
        const titulo = $(elem).find('div[class*="titulo"]').text();
        if(titulo != ''){
            const detalhes = $(elem).find('div[class*="detalhes"]').text();
            noticia = { titulo, detalhes}
            list.push(noticia)
        }  
    })
    console.log(list);
}

getNoticias();