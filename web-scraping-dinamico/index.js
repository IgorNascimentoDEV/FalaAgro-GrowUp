const pup = require('puppeteer');

const url = "https://www.embrapa.br/busca-de-noticias/-/noticia/todos?";

( async () => {
    const browser = await pup.launch();
    const page = await browser.newPage();
    console.log('Inicie!');

    await page.goto(url);
    console.log('fui para url!');

    await browser.close();
})();
