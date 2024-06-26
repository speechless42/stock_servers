const axios = require("axios")
//url="https://www.twse.com.tw/rwd/zh/fund/TWT44U?date=20240315&response=json"

async function Get_investBank(){
    //把今天算出來。
    const today = new Date();
    let Year = today.getFullYear();
    let Month = today.getMonth() + 1;
    let date = today.getDate();
    if(Month == 0){Month = 12;Year = Year-1;}
    if(Month < 10){Month = `0${Month}`}
    if(date < 10){date = `0${date}`}
    url = `https://www.twse.com.tw/rwd/zh/fund/TWT44U?date=${Year + Month + (date - 1)}&response=json`
    const investdata = axios.get(url).then((res) => {return res.data})
    return investdata
}
Get_investBank()
module.exports = {
    Get_investBank:Get_investBank
}