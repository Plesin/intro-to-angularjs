"use strict";

app.controller("LoginController", function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials);
  }
});

app.controller("HomeController", function($scope, $location, AuthenticationService, Houses, $routeParams) {
  $scope.title = "Awesome Home";
  $scope.message = "Mouse Over these images to see a directive at work!";
  $scope.houses = Houses.Items;

  $scope.logout = function() {
    AuthenticationService.logout();
  };

});

app.controller("DetailController", function($scope, $routeParams, Houses) {
  $scope.house = Houses.getItemById($routeParams.id);
});