const revenueYearRanks = require("../../models").revenueYearRanks

async function SaveRevenueRanks(json){
    const today = new Date();
    let month;
    if(today.getMonth() == 0){month = 12}
    else{month = today.getMonth()}
    let ThisDay = `${today.getFullYear()}-${month}-${today.getDate()}`
    for(let i=0;i<json.length;i++){
        setTimeout(async ()=>{
            revenueYearRanks.findAll({where:{symbol : json[i].symbol}})
            .then(async (data)=>{
                console.log(typeof(data))
                if(data == 0){
                    await revenueYearRanks.create({
                    symbol:json[i].symbol,
                    name:json[i].name,
                    revenue:json[i].revenue,
                    L_Mon_Compare:json[i].L_Mon_Compare,
                    L_Year_Compare:json[i].L_Year_Compare,
                    Remark:json[i].Remark,
                    date:ThisDay
                }).then(()=>{console.log('create complete!')})

                }
                else{
                    console.log('nocreate')
                }
            })
    //         if(data == []){
    //             await revenueYearRanks.create({
    //                 symbol:element.symbol,
    //                 name:element.name,
    //                 revenue:element.revenue,
    //                 L_Mon_Compare:element.L_Mon_Compare,
    //                 L_Year_Compare:element.L_Year_Compare,
    //                 Remark:element.Remark,
    //                 date:ThisDay
    //             }).then(()=>{
    //                 console.log("create complete!")
    //             })
        },3000*i)
    }
    // json.forEach(async element => {
    //     revenueYearRanks.findAll({where:{symbol : element.symbol}})
    //     .then(async (data)=>{
    //         if(data == []){
    //             await revenueYearRanks.create({
    //                 symbol:element.symbol,
    //                 name:element.name,
    //                 revenue:element.revenue,
    //                 L_Mon_Compare:element.L_Mon_Compare,
    //                 L_Year_Compare:element.L_Year_Compare,
    //                 Remark:element.Remark,
    //                 date:ThisDay
    //             }).then(()=>{
    //                 console.log("create complete!")
    //             })
    //             setTimeout(()=>{console.log('wait')},3000)
    //             }

    //     })
            
    //     });
}
module.exports = { SaveRevenueRanks }