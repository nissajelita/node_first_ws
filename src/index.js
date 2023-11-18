const express = require('express');
const app = express();
const productsRoutes = require('./routes/productsRoutes'); //or ./routes/products.js


// pattern umum di nodejs:
// app.method(path, handler) //handler: apa yg mau dilakukan




app.use('/products', productsRoutes)


app.use('/', (req, res, next)=>{
    res.send('yours');
});

app.listen(4000, () => {
    console.log('Your server is running!');
})

