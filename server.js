const express = require("express");
const cart = require('./cart-routes');
const app = express();
const port = 8888;

app.use(express.json());

app.use('/cart-items', cart);


app.listen(port, () => console.log(`listening on port: ${port}`));