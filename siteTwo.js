// import puppeteer
const puppeteer = require('puppeteer');
//import secrets file
const myBusiness = require('./secrets')

module.exports = {
    getJeepPricesSiteTwo
}



async function getJeepPricesSiteTwo(url) {

    //wait to launch puppeteer, IT WORKS!!!!
    const browser = await puppeteer.launch({ headless: true, slowMo: 300, defaultViewport: null});
    //open a blank pageTwo
    const pageTwo = await browser.newPage();
    pageTwo.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36');
    //navigate to url
    await pageTwo.goto(url);
    //wait until this selector loads, then search for my car
    await pageTwo.waitForSelector('#cfx-cars');
    await pageTwo.click('#cfx-cars')
    await pageTwo.waitForSelector('.form-control.search-make');
    await pageTwo.click('.form-control.search-make')
    await pageTwo.waitForSelector('.searchForm-wrapper')
    await pageTwo.click('.form-control.search-make')
    // await pageTwo.hover('.search-make option:nth-of-type(16)') add hover b4 click
    await pageTwo.select('select.form-control.search-make', 'Jeep')
    // await pageTwo.hover('#make_Jeep') add hover b4 click
    await pageTwo.waitForSelector('.form-control.search-make')
    await pageTwo.click('.form-control.search-model')
    await pageTwo.select('select.form-control.search-model', 'Wrangler')
    await pageTwo.focus('.search-zip')
    await pageTwo.keyboard.type('20735', {delay: 100})
    await pageTwo.click('#make-model-form-submit')
    await pageTwo.waitForSelector('.checkbox-list li:nth-of-type(1)');
    await pageTwo.click('.checkbox-list li:nth-of-type(1)')
    await pageTwo.click('.button.large.primary-green')

    //waiting for vehicle stats to load
    await pageTwo.waitForSelector('.srp-list-item');

    //this works, now let's try to make it DRY
    //  const jeepTitle = await pageTwo.$$eval('.vehicleTitle', jeeps => { 
    // //     //gimme the first 5 results, this works
    //     return jeeps.map(jeep => jeep.textContent.slice(0, 5))
    // })

     const carStats = await pageTwo.evaluate(() => 
     //creating an array
        Array.from(document.querySelectorAll('.srp-list-item'))
        //gimme the info
        .map(info => ({
            title: info.querySelector('.srp-list-item-basic-info-model').textContent.trim(),
            deetz: info.querySelector('.srp-list-item-options-descriptions').textContent.trim(),
            img: info.querySelector('.srp-list-item-photo img').src,
            listPrice: info.querySelector('.srp-list-item-price').textContent.trim(),
            monthlyPrice: info.querySelector('.price-per-month').textContent.trim(), 
            mileage: info.querySelector('.srp-list-item-basic-info-value:nth-of-type(1)').textContent.trim()
        }))
     )
        // return carStats
     console.log(carStats)
    // //saving it to folder pile path
    //  await pageTwo.pdf({path: myBusiness.filePath})


   await browser.close()



}

getJeepPricesSiteTwo('https://www.carfax.com')