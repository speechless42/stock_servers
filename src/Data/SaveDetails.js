const stock_day_histroy = require('../../models').stock_Day_History

async function SaveDetails(data){
    await stock_day_histroy.create({
        symbol: data.symbol,
        open: data.data[0].open,
        high: data.data[0].high,
        low: data.data[0].low,
        close: data.data[0].close,
        volume: data.data[0].volume,
        _change: data.data[0].change,
        date: data.data[0].date
    })
}


module.exports = {SaveDetails}