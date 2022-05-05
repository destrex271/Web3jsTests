require('dotenv').config()
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')
const web3 = new Web3('http://127.0.0.1:7545')

const acc1 = '0x8C7247c80C6185B5c4546Bea69d13A31Eb8e7D2a'
const acc2 = '0xa72DFD4915281D366E23d008400989FA2C8C4787'

const pk1 = Buffer.from(process.env.PK1, 'hex')
const pk2 = Buffer.from(process.env.PK2, 'hex')

web3.eth.getTransactionCount(acc1, (err, txCount)=>{
    // Building transaction
    const txObj = {
        nonce: web3.utils.toHex(txCount),
        to: acc2,
        val: web3.utils.toHex(web3.utils.toWei('1','ether')),
        gasLimit: web3.utils.toHex(2100),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }
    // Sign it
    const tx = new Tx.Transaction(txObj)
    tx.sign(pk1)
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString()
    // Broadcast it
    web3.eth.sendSignedTransaction(raw, (err, txhash)=>{
        console.log('txHash:', txhash)
    })
})

