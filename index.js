const puppeteer = require('./puppeteer.js');

config = {
    page: 'http://globoesporte.globo.com/futebol/brasileirao-serie-a/',
}

puppeteer(config)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })