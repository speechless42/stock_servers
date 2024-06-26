const express = require('express');
const router = express.Router();
const getRenvenue = require('../Controllers/getDataController/C_getRevenue').getRenvenue
const getRenvenue = require('../Controllers/getDataController/C_getinvest').getInvest
// const { runScrapingTask } = require('../controllers/scrapingController');

// 股票資訊路由
router.get('/Revenue_Rank', async (req, res) => {
    let dta = await getRenvenue();
    // dta = dta.map((data)=>{data})
    
    if( dta == 0 ){res.send("no data")}
    dta = JSON.stringify(dta);
    res.set('Access-Control-Allow-Origin', '*')
    res.send(dta)
});
router.get('/investdata',async (req,res)=>{
    let invest = await getInvest();
    res.set('Access-Control-Allow-Origin', '*')
    res.send(invest)
})
//
module.exports = router;