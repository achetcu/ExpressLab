"use strict"
{
    angular.module('app')
        .controller('CartController', function($http){
            const $ctrl = this;
            $ctrl.shoppingCart = [];

            $ctrl.addItem = function () {
            $http.post('/api/rooms', {product: $ctrl.product, price: $ctrl.price, quantity: $ctrl.quantity}).then(result =>{
                
                // const sql ='insert into shoppingcart(product, price, quantity) values($1::text, $2::real, $3::int)';
                // const values ={product: $ctrl.product, price: $ctrl.price, quantity: $ctrl.quantity};
                //  pool.query(sql, values).then(result => res.send(result));
            });
        }
        
        
        let url = 'http://localhost:8888/rooms';

        let final = $http.get(url);
        final.then((responseData) => {
            $ctrl.shoppingCart= responseData.data;
            console.log("This is the data", responseData.data);
            return $ctrl.shoppingCart;
        });
        });
}