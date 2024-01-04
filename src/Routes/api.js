const express = require('express');
const router = express.Router();
const getRenvenue = require('../Controllers/getDataController/C_getRevenue').getRenvenue
// const { runScrapingTask } = require('../controllers/scrapingController');

// 股票資訊路由
router.get('/Revenue_Rank', async (req, res) => {
    console.log(await getRenvenue())
    res.json({ success: true });
});

module.exports = router;