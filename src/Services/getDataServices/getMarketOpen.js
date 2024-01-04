async function GetMarketStatus(fugle){
    const res = await fugle.getMarketStatus();
    return res
}

module.exports = { GetMarketStatus }