"use strict";

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