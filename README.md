# Jeep-Prices
***web scraping various sites to compare jeep prices + add them to a pdf using:***
 
 - Puppeteer + JS


  const jeepInfo = await pageOne.evaluate(() => {
        const test = Array.from(document.querySelectorAll('.hasVehicleInfo'))

        let arr = []

        test.map(info => {
            dataObj= {
               title: info.querySelector('.vehicleTitle').textContent.trim(),
               deetz: info.querySelector('.srpVehicleDetails').textContent.trim(),
               img: info.querySelector('.vehicleImg').src,
               price: info.querySelector('.priceBlock').textContent
            }
            arr.push(dataObj)
         
        })
    console.log(arr)
    
     //creating an array
    //    Array.from(document.querySelectorAll('.hasVehicleInfo'))
    //     //gimme the info
    //     .map(info => ({
    //         title: info.querySelector('.vehicleTitle').textContent.trim(),
    //         deetz: info.querySelector('.srpVehicleDetails').textContent.trim(),
    //         img: info.querySelector('.vehicleImg').src,
    //         price: info.querySelector('.priceBlock').textContent
    //     }))




     })
     
        // return jeepInfo
    console.log(jeepInfo)