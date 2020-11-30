// import puppeteer
const puppeteer = require('puppeteer');
//import secrets file
const myBusiness = require('./secrets')

async function getJeepPrices(url) {

    //wait to launch puppeteer
    //try copying full x path and grabbing car prices tomorrow
    const browser = await puppeteer.launch({ headless: true});
    //open a blank page
    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36');
    //navigate to url
    await page.goto(url);
    //wait until this selector loads, then search for my car
    await page.waitForSelector('.opensearch');
    await page.type('#opensearch-widget-container', 'Jeep Wrangler Sahara')
    await page.click('.btn-cta.stat-search-submit')

    //waiting for vehicle stats to load
    await page.waitForSelector('.hasVehicleInfo');

    //this works, now let's try to make it DRY
    //  const jeepTitle = await page.$$eval('.vehicleTitle', jeeps => { 
    // //     //gimme the first 5 results, this works
    //     return jeeps.map(jeep => jeep.textContent.slice(0, 5))
    // })

     const jeepInfo = await page.evaluate(() => 
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
     await page.pdf({path: myBusiness.filePath})


    browser.close()



}

getJeepPrices('https://www.waldorfchryslerjeep.com/')