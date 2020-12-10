
const siteOne = require('./siteOne');
const siteTwo = require('./siteTwo');

(async () => {

    try {
        await siteOne.getJeepPricesSiteOne(url);
        await siteTwo.getJeepPricesSiteTwo(url);
        // console.log(await pUtils.getTitle(page));
      
    } catch (err) {

        console.error(err);
}

})()




