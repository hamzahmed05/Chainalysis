var express = require("express");
var router = express.Router();
var axios = require('axios')
router.use(express.json());


router.get('/', async function(req, res, next) {
    let ETHbidPrice, ETHaskPrice, BTCbidPrice, BTCaskPrice
    try{
        let response = await axios.get("https://api.coinbase.com/v2/prices/BTC-USD/sell")
        console.log(response.data.data.amount)
        BTCaskPrice = response.data.data.amount

    } catch(error){
        console.log(" Error while fetching ExchangeB BTC Sell Prices ", error)
    }
    try{
        let otherresponse = await axios.get("https://api.coinbase.com/v2/prices/BTC-USD/buy")
        BTCbidPrice = otherresponse.data.data.amount

    } catch(error){
        console.log(" Error while fetching ExchangeB BTC Buy Prices ", error)
    }
    try{
        let otherresponse1 = await axios.get("https://api.coinbase.com/v2/prices/ETH-USD/buy")
        ETHbidPrice = otherresponse1.data.data.amount

    } catch(error){
        console.log(" Error while fetching ExchangeB ETH Buy Prices ", error)
    }
    try{
        let otherresponse2 = await axios.get("https://api.coinbase.com/v2/prices/ETH-USD/sell")
        ETHaskPrice = otherresponse2.data.data.amount

    } catch(error){
        console.log(" Error while fetching ExchangeB ETH Sell Prices ", error)
    }
    

    res.send(
        {ETHbidPrice,
        ETHaskPrice,
        BTCaskPrice,
        BTCbidPrice}
    )

})



module.exports = router;



// Exchange B = coin base
