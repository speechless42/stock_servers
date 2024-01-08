const express = require('express');
const router = express.Router();
const getRenvenue = require('../Controllers/getDataController/C_getRevenue').getRenvenue
// const { runScrapingTask } = require('../controllers/scrapingController');

// 股票資訊路由
router.get('/Revenue_Rank', async (req, res) => {
    let dta = await getRenvenue();
    // dta = dta.map((data)=>{data})
    console.log(dta)
    dta = JSON.stringify(dta)
    res.send(dta)
});

module.exports = router;