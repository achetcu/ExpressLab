"use strict";
{
angular.module("app").service("CartService", function($http){
const service = this;

service.addItem = (newItem) => {
    return $http({
    method: "POST",
    url: "/shopping",
    data: newItem
   });
  };

service.updateItem = (items) => {
    return $http({
        method: "PUT",
        url: `/shopping/${items.id}`, 
        data: items
    });
  };

  service.removeItem = (id) => {
    return $http({
      method: "DELETE",
      url: `/shopping/${id}` 
    });
  };

  service.getData = () => {
    return $http({
      method: "GET",
      url: "/shopping"
    });
  };

});

}