const puppeteer = require('puppeteer');

Pupperteer = async (config = {}) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(config.page ? config.page : null);
    await page.waitFor(1000);
    //gerando pdf da página
    /*  await page.pdf({
         path: 'page.pdf',
         format: 'A4'
     }); */
    //tirando screenshot da página
    //await page.screenshot({ path: 'page.png' });

    //globo esporte
    /* const result = await page.evaluate(() => {
        const result = {
            title: document.title,
            posicoes: [],
            times: [],
            pontos: []
        }
        document.querySelectorAll('.classificacao__equipes--posicao').forEach(posicao => result.posicoes.push(posicao.innerHTML));
        document.querySelectorAll('.classificacao__equipes--nome').forEach(time => result.times.push(time.innerHTML));
        document.querySelectorAll('.classificacao__pontos--ponto').forEach(ponto => result.pontos.push(ponto.innerHTML));

        return result;
    }); */

    const result = await page.evaluate(() => {
        const result = [];
        document.querySelectorAll('.graf').forEach(content => result.push(content.textContent));
        return result;
    })

    browser.close();
    return result;
};

module.exports = Pupperteer;