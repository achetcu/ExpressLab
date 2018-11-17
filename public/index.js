"use strict";
{
    angular.module('app',['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    template:'<cart></cart>'
                })
                .otherwise({
                    template: '<h1>404</h1>'
                });
        });
}