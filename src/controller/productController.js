const conn = require('../config/initdb');

// import yourDb from './config/initdb.js'

const getProducts = async(req, res)=>{
    const products = await conn`SELECT * FROM rp_product`;
    res.json(products);
}

module.exports = {
    getProducts
}