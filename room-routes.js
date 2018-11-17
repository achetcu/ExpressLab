const express = require("express");
const pool = require('./db');
const router = express.Router();


router.get('/', (req, res) => {
    pool.query('select * from shoppingcart').then(result =>{
        res.send(result.rows);
    });
  });

router.post('/', (req, res)=> {
    const sql ='insert into shoppingcart(product, price, quantity) values($1::text, $2::real, $3::int)'
    const values =[req.body.product, req.body.price, req.body.quantity];
    pool.query(sql, values).then(result => res.send(result));
  });

router.get('/:id', (req, res) =>{
    pool.query(`select * from shoppingcart where id=${req.params.id}`).then(result => {
        res.send(result.rows);
    });
});

router.delete('/:id', (req, res) =>{
pool.query(`delete from shoppingcart where id=${req.params.id}`).then(result =>{
    res.send(result);
});
});

//Sending http with front end angular code in service or controller
// $http.get('/api/rooms').then(results =>{});
// $http.post('/api/rooms', {name: 'sung', available: false. capacity: 20}).then(result =>{});
// $http.put('/api/rooms/1', {name: 'Snug', available:true, capacity: 15}).then(result =>{});
// $http.delete('/api/rooms/1').then(result =>{});

module.exports = router;