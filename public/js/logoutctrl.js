angular.module('myApp').controller('logoutCtrl', function($scope, $http, $location, $sessionStorage) {
    $sessionStorage.id = null;
    $sessionStorage = null;
    window.localStorage['status'] = false;
});