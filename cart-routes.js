const express = require("express");
const router = express.Router();
const items = [{id: "1", product: "Apple", price: "$10", quanity: "5"}, 
                {id: "2", product: "Orange", price: "$6", quanity: "3"}, 
                {id: "3", product: "Pears", price: "$8", quanity: "4"}, 
                {id: "4", product: "Chips", price: "$16", quanity: "3"}, 
            ];

router.get('/', (req, res) => {
    res.send(items);
  });

router.post('/', (req, res)=>{
    if(req.body){
        res.status(201).send('Here is the body');
    } else {
        res.sendStatus(400);
    }
});
  

router.put('/:id', (req, res)=>{
    res.send(`URL ID: http://localhost:8888/cart-items/${req.params.id}, 
    Body: ${req.body.item}`);
  
});

router.delete('/:id', (req, res)=>{
      res.send(`URL ID: http://localhost:8888/cart-items/${req.params.id}`);
  });

module.exports = router;