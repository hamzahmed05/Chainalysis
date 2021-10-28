var express = require("express");
var router = express.Router();
var axios = require('axios')
router.use(express.json());



router.get('/', async function (req, res, next) {
    // console.log("REQ => ", req)
    
    // axios.get("https://api.blockchain.com/v3/exchange/l3/ETH-USD")
    // .then( response => console.log("response.data +>>>>", response.data))
    // .then( response => res.send(response))

    let ETHbidPrice, ETHaskPrice, BTCbidPrice, BTCaskPrice

    try{
        let response = await axios.get("https://api.blockchain.com/v3/exchange/l3/ETH-USD")
        //console.log(response.data.bids[0].px)
        ETHbidPrice = response.data.bids[0].px
        ETHaskPrice = response.data.asks[0].px

    } catch(error){
        console.log(" Error while fetching ExchangeA ETH Prices ", error)
    }
    try{
        let otherresponse = await axios.get("https://api.blockchain.com/v3/exchange/l3/BTC-USD")
        ///console.log(otherresponse.data.bids[0].px)
        BTCbidPrice = otherresponse.data.bids[0].px
        BTCaskPrice = otherresponse.data.asks[0].px

    } catch(error){
        console.log(" Error while fetching ExchangeA ETH Prices ", error)
    }

    res.send(
        {ETHbidPrice,
        ETHaskPrice,
        BTCaskPrice,
        BTCbidPrice}
    )

})



module.exports = router;


// Exchange A = blockchain.com