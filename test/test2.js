const axios = require("axios")
const iconv = require('iconv-lite');
const numeral = require('numeral');
const cheerio = require("cheerio");
async function test2(){
const config = {
    'Content-Type':'application/x-www-form-urlencoded'
}
const conference = await axios.post('https://mops.twse.com.tw/mops/web/ajax_t100sb02_1',{
encodeURIComponent: 1,
step: 1,
firstin: 1,
off: 1,year:'113',month:'02',TYPEK:'sii',co_id : ''}, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-agent' : "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36"
    },
    
}
)
.then((res)=>{
    // console.log(res)
    const $ = cheerio.load(res.data);
    const data = $("tr[data-type='body']")
    .map((i,el)=>{
        const td = $(el).find('td');
        const symbol = td.eq(0).text().trim();
        const name = td.eq(1).text().trim();
        const date = td.eq(2).text().trim();
        return {symbol , name , date}
    }).toArray()
    console.log(data)
    return data
})
// await axios.post('https://mops.twse.com.tw/mops/web/ajax_t100sb02_1',config)
// .then((res)=>console.log(res))
}
test2();