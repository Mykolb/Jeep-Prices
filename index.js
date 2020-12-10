
const siteOne = require('./siteOne');
const siteTwo = require('./siteTwo');

(async () => {

    try {
        await siteOne.getJeepPricesSiteOne(url);
        await siteTwo.getJeepPricesSiteTwo(url);
        
    } catch (err) {

        console.error(err);
}

})()




