const axios = require("axios");
const cheerio = require("cheerio");
// url='https://mops.twse.com.tw/mops/web/ajax_t100sb02_1'
async function Get_conference(market){
    url='https://mops.twse.com.tw/mops/web/ajax_t100sb02_1'
    const today = new Date();
    let Year = today.getFullYear() - 1911;
    let Month = today.getMonth() + 2;
    // var market = ['sii','otc']
    if(Month < 10){Month = `0${Month}`;}
    else if(Month == 13 ){ Month = '01'; Year += 1; }
    else {Month = Month.toString();}

    let conference = axios.post(url,null,{params:{
        encodeURIComponent: 1,
        step: 1,
        firstin: 1,
        off: 1,
        year:Year,month:Month,TYPEK:market
        }}).then((res) =>{
            const $ = cheerio.load(res);
            const data = $("tr[data-type='body']")
                .map((i,el)=>{
                    const td = $(el).find('td');
                    const symbol = td.eq(0).text().trim();
                    const name = td.eq(1).text().trim();
                    const date = td.eq(2).text().trim();
                    return {symbol , name , date}
                }).toArray()
            return data
            })
    return conference
}

module.exports = {
    Get_conference:Get_conference
}