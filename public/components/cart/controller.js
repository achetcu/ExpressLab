"use strict"
{
    angular.module('app')
        .controller('CartController', function(CartService){
            const $ctrl = this;
          
            
            function changes(response) {
              $ctrl.item = response.data;
              
            }
        
            $ctrl.updateItem = (items) => {
              CartService.updateItem(items).then(changes);
            };

            CartService.getData().then(changes);

            $ctrl.removeItem = (id) => {
              CartService.removeItem(id).then(changes);
              location.reload(true);
            };

            $ctrl.addItem = (newItem) => {
              CartService.addItem(newItem).then(changes);
              location.reload(true);
             
            };



        //      $ctrl.removeItem = (id) => {
        //         return $http({
        //           url: "http://localhost:8888/shopping/" + id,
        //           method: "DELETE"
        //         }).then((response) => {
        //             $window.location.reload();
        //           return response.data;
        //       }); };
              
        //       $ctrl.updateItem = (id) => {
        //         return $http({
        //           url: "http://localhost:8888/shopping/" + id,
        //           method: "PUT",
        //           data: {quantity: $ctrl.quantity}
        //         }).then((response) => {
        //           return response.data;
        //       }); };
        
        // let url = 'http://localhost:8888/shopping';

        // let final = $http.get(url);
        // final.then((responseData) => {
        //     $ctrl.shoppingCart= responseData.data;
        //     console.log("This is the data", responseData.data);
        //     return $ctrl.shoppingCart;
        // });
        });
}