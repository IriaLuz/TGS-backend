const express = require ('express');
const data = require('./products');
const app = express ();
const cors = require("cors");


app.use(cors());

app.get('/api/products', (req, res)=>{
    res.send (data.products);
})

app.get('/api/products/:id', (req, res) =>{
    const product = data.products.find(product => product.id === req.params.id);
    if (!product) res.status(404).send ('The product with the given id does not exist' )
    res.send(product);
});

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log (`Listening on port ${port}...`));