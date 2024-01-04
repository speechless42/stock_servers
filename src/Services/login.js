const FugleTrade = require('@fugle/trade').FugleTrade;
const GetData = require('./getDataServices/getMarketOpen').GetMarketStatus
// 以 config.ini 設定檔初始化新的 SDK 物件
const fugle = new FugleTrade({
    configPath:'./config.simulation.ini',
});

// 登入
async function Login(){
    await fugle.login();
    const res = await GetData(fugle)
    console.log(res)
}
Login()