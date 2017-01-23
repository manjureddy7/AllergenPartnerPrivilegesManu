angular.module('myApp').controller('AppCntrl', function($scope, $http, $location) {

    $http.get('/accounts').success(function(response) {
       $scope.accounts = response;
    });

    $scope.sortColumn = "Level";
    $scope.filterByOption = "Silver";

    $scope.checkLevel = function(value, index) {


        if ($scope.filterByOption == "Silver")
            return value.level && ['Silver', 'Gold', 'Platinum', 'Platinum Plus', 'Diamond'].indexOf(value.level) !== -1;
        if ($scope.filterByOption == "Gold")
            return value.level && ['Gold', 'Platinum', 'Platinum Plus', 'Diamond'].indexOf(value.level) !== -1;
        if ($scope.filterByOption == "Platinum")
            return value.level && ['Platinum', 'Platinum Plus', 'Diamond'].indexOf(value.level) !== -1;
        if ($scope.filterByOption == "Platinum Plus")
            return value.level && ['Platinum Plus', 'Diamond'].indexOf(value.level) !== -1;
        if ($scope.filterByOption == "Diamond")
            return value.level && ['Diamond'].indexOf(value.level) !== -1;
    }
});