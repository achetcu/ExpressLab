const express = require("express");
const cart = require('./cart-routes');
const items = require('./room-routes');
const app = express();
const port = 8888;



//pool.query('select * from rooms').then(result => console.log(result.rows));

app.use(express.json());
app.use(express.static('./public'));
app.use('/cart-items', cart);
app.use('/shopping', items);


app.listen(port, () => console.log(`listening on port: ${port}`));