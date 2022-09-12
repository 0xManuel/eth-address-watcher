const BlocknativeSdk = require('bnc-sdk');
const WebSocket = require('ws');
const options = {
    dappId: 'BLOCKNATIVE_DAPP_ID',
    networkId: 1,
    ws: WebSocket,
    onerror: (error) => { console.log(error) }
}
const blocknative = new BlocknativeSdk(options)
const address = "TO BE WATCHED ADDRESS"
const { emitter} = blocknative.account(address)
emitter.on("txPool", (transaction) => {
    console.log("New tx:", transaction.hash, "From account:", transaction.from, "To account:", transaction.to, "Value:", transaction.value, "Gas Price:", transaction.gasPrice)
})