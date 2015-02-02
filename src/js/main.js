//Use CommonJS style via browserify to load other modules

var app = require("./application");
var util = require("./util");

app.controller("SchoolController", ["$scope", function($scope) {

  var all = window.schoolData;

  $scope.searchField = "name";

  $scope.search = util.debounce(function() {
    var value = $scope.searchText;
    if (!value) {
      $scope.found = [];
    } else {
      value = value.toLowerCase();
      $scope.found = all.filter(function(item) {
        return item[$scope.searchField].toLowerCase().indexOf(value) > -1;
      });
    }
    $scope.$apply();
  });

  $scope.found = [];

  $scope.allSchools = window.schoolData;
}]);