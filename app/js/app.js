"use strict";

var app = angular.module("app", []);

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/detail/:id', {
    templateUrl: 'detail.html',
    controller: 'DetailController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});
