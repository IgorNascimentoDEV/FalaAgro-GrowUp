const pup = require('puppeteer');

const url = "https://www.embrapa.br/busca-de-noticias/-/noticia/todos?";

let c = 1;

( async () => {
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    console.log('Inicie!');

    await page.goto(url);

    console.log('fui para url!');

    const links = await page.$$eval('.titulo > a', el => el.map(link => link.href))

    for(const link of links){
        console.log('Pagina ', c);
        await page.goto(link);

        const title = await page.$eval('.titulo', element => element.innerText);
        const dataNoticia = await page.$eval('.data', date => date.innerText);
        const autorNoticia = await page.$eval('.autor > .negrito', autor => autor.innerText);
        const textoNoticia = await page.$$eval('.texto-noticia > p', par => par.map(p => p.innerText));

        const obj = {title, dataNoticia, textoNoticia, autorNoticia};
        console.log(obj)
        c++;
    }

    await page.waitForTimeout(300);
    await browser.close();
})();
