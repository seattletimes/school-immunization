//Use CommonJS style via browserify to load other modules

var app = require("./application");

app.controller("SchoolController", ["$scope", function($scope) {
  $scope.allSchools = window.schoolData;
}]);
