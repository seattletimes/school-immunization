//Use CommonJS style via browserify to load other modules

var app = require("./application");
var util = require("./util");
require("component-responsive-frame/child");

app.controller("SchoolController", ["$scope", function($scope) {

  var all = window.schoolData;

  $scope.searchField = "name";

  $scope.search = util.debounce(function() {
    var value = $scope.searchText;
    if (!value) {
      $scope.found = [];
    } else {
      value = value.toLowerCase();
      var filtered = all.filter(function(item) {
        return item[$scope.searchField].toLowerCase().indexOf(value) > -1;
      });
      $scope.found = filtered.slice(0,50);
    }
    $scope.$apply();
  });

  $scope.found = [];

  $scope.allSchools = window.schoolData;
}]);