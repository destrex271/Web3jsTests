require('dotenv').config()
const Web3 = require('web3')
const Tx = require('ethereumjs-tx')
const web3 = new Web3('http://127.0.0.1:7545')

const acc1 = '0x8C7247c80C6185B5c4546Bea69d13A31Eb8e7D2a'
const acc2 = '0xa72DFD4915281D366E23d008400989FA2C8C4787'

const pk1 = Buffer.from(process.env.PK1)
const pk2 = Buffer.from(process.env.PK2)

// Building transaction