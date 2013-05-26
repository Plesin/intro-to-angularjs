var app = angular.module("app", [])

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

app.factory('Houses', function() {
  var items = [
    {id: 1, fileName: "demo1.jpg", desc: "Im the first house."},
    {id: 2, fileName: "demo2.jpg", desc: "Im the second house."}
  ];

  return {
    Items: items,
    getItemById: function(id) {
      var found = false;
      items.forEach(function(item) {
        if (item.id == id) {
          found = item;
        }
      });
      return found;
    }
  };
});

app.factory("AuthenticationService", function($location) {
  return {
    login: function(credentials) {
      if (credentials.username !== "aaa" || credentials.password !== "aaa") {
        alert("Username must be 'aaa', password must be 'aaa'");
      } else {
        $location.path('/home');
      }
    },
    logout: function() {
      $location.path('/login');
    }
  };
});

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
