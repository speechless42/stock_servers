const revenueYearRanks = require("../../models").revenueYearRanks

async function SaveRevenueRanks(json){
    const today = new Date();
    let ThisDay = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    
    json.forEach(async element => {
        let A = await revenueYearRanks.findAll({where:{symbol : element.symbol}})
        if(A == []){
        await revenueYearRanks.create({
            symbol:element.symbol,
            name:element.name,
            revenue:element.revenue,
            L_Mon_Compare:element.L_Mon_Compare,
            L_Year_Compare:element.L_Year_Compare,
            Remark:element.Remark,
            date:ThisDay
        })
        }
    });
}
module.exports = { SaveRevenueRanks }