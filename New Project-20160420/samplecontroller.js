var myApp = angular.module("myApp",[]);
myApp.controller('samplecontroller',['$scope',  function($scope) {
    $scope.result = { name : 'test' };
    $scope.number = 50;
    }
]);