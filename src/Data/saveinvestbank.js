const investbank = require("../../models").investbank
async function saveinvestbank(jsons){
    await investbank.destroy({
        truncate: true
      });
    // const data = await invest();
    for(let i=0;i<jsons.data.length;i++){
        setTimeout(async ()=>{
            await investbank.create({
                date:jsons.date,
                symbol:jsons.data[i][1],
                name:jsons.data[i][2],
                volume:jsons.data[i][5]
            }).then(()=>{console.log("invest create complete!!")}).catch(()=>console.log("投信加入失敗"))
        },3000*i)
    }
}
module.exports = {
    saveinvestbank:saveinvestbank
}
