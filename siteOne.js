// import puppeteer
const puppeteer = require('puppeteer');
//import secrets file
const myBusiness = require('./secrets')


module.exports = {
    getJeepPricesSiteOne
}


async function getJeepPricesSiteOne(url) {

    //wait to launch puppeteer
    //try copying full x path and grabbing car prices tomorrow, pdf only generates in headless
    //open a blank pageOne
    const browser = await puppeteer.launch({headless: false, slowMo: 300, defaultViewport: null});
    const pageOne = await browser.newPage();
    pageOne.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36');
    //navigate to url
    await pageOne.goto(url);
    //wait until this selector loads, then search for my car
    await pageOne.waitForSelector('.opensearch');
    await pageOne.focus('#opensearch-widget-container input')
    await pageOne.keyboard.type('Jeep Wrangler Sahara', {delay: 100})
    await pageOne.click('.btn-cta.stat-search-submit')

    //waiting for vehicle stats to load
    await pageOne.waitForSelector('.hasVehicleInfo');

    //this works, now let's try to make it DRY
    //  const jeepTitle = await pageOne.$$eval('.vehicleTitle', jeeps => { 
    // //     //gimme the first 5 results, this works
    //     return jeeps.map(jeep => jeep.textContent.slice(0, 5))
    // })

     const jeepInfo = await pageOne.evaluate(() => 
     //creating an array
        Array.from(document.querySelectorAll('.hasVehicleInfo'))
        //gimme the info
        .map(info => ({
            title: info.querySelector('.vehicleTitle').textContent.trim(),
            deetz: info.querySelector('.srpVehicleDetails').textContent.trim(),
            img: info.querySelector('.vehicleImg').src,
            price: info.querySelector('.priceBlock').textContent
        }))
     )

     console.log(jeepInfo)
    //saving it to folder pile path
    //  await pageOne.pdf({path: myBusiness.filePath})

    browser.close()



}

getJeepPricesSiteOne('https://www.waldorfchryslerjeep.com/')