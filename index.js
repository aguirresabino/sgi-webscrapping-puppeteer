const puppeteer = require('./puppeteer.js');
const fs = require('fs');

config = {
    //page: 'http://globoesporte.globo.com/futebol/brasileirao-serie-a/',
    page: 'https://medium.com/@osuissa/node-js-express-refatorando-suas-rotas-9e322273feb'
}

puppeteer(config)
    .then((result) => {
        console.log(result);
        for(element in result) fs.appendFile('webcrawler.txt', result[element] + '\n', (error) => {
            if(error) throw error;
        });
    })
    .catch((error) => {
        console.log(error);
    })