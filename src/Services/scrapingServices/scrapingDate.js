const numeral = require('numeral');
const cheerio = require("cheerio");
const axios = require("axios")
const iconv = require('iconv-lite');

async function getupdate(){
const date = ["205","206","207","208","209","210","211","212","213","214","215","228","404","405","501","610","917","1010"]
url='https://www.twse.com.tw/rwd/zh/holidaySchedule/holidaySchedule?response=html'
const page = await axios.get(url,
    { responseType: 'arraybuffer' }).then(response => iconv.decode(response.data, 'big5'))
    const $ = cheerio.load(page);

const data = $('td').
     
console.log(data[0].children[0].data)
}
getupdate()