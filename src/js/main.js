//Use CommonJS style via browserify to load other modules

var app = require("./application");

app.controller("SchoolController", ["$scope", function($scope) {

  var all = window.schoolData;

  $scope.searchField = "name";

  $scope.search = function() {
    value = $scope.searchText.toLowerCase();
    console.log(value)
    if (!value) {
      return $scope.found = [];
    }
    $scope.found = all.filter(function(item) {
      return item[$scope.searchField].toLowerCase().indexOf(value) > -1;
    });
  };

  $scope.found = [];

  $scope.allSchools = window.schoolData;
}]);