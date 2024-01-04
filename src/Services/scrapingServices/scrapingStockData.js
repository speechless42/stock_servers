const stockId = require('../getDataServices/getStockIDs').Get_Ids_From_DB
const { RestClient } = require('@fugle/marketdata');
require("dotenv").config({path:"./.env"})
const SaveDetails = require("../../Data/SaveDetails").SaveDetails
async function Get_Daily_Details(){
    const client = new RestClient({ apiKey: process.env.FUGLE_API_KEY });
    const stock = client.stock;
    const All_IDs = await stockId();
    const FilterIDs = All_IDs.map((item)=>{ return item.symbol})
    
    const today = new Date();
    let month, date;
    if((today.getMonth()+1)<10){
        month = `0${today.getMonth()+1}`;
    }else{
        month = (today.getMonth()+1).toString();
    }
    if(today.getDate()<10){
        date = `0${today.getDate()}`;
    }else{
    date = (today.getDate()).toString();
    }
    let ThisDay = `${today.getFullYear()}-${month}-${date}`
    for(let i=0;i<FilterIDs.length;i++){
        
        setTimeout(async function() {
            let Data = await stock.historical.candles({symbol:FilterIDs[i],to:"2023-12-29",from:"2023-12-29",timeframe:'D',fields: 'open,high,low,close,volume,change'})
            await SaveDetails(Data)
            console.log("儲存成功")
        },i*10000)
    }
    
}
module.exports = { Get_Daily_Details }
