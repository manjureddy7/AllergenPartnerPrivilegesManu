angular.module('myApp').controller('loginCtrl', function($scope, $http, $location, $sessionStorage) {

    $scope.submit = function() {

        console.log($scope.user);
        $http.post('/UserData', $scope.user).then(function(response) {
            if (response.data == null) {
                console.log(" login failed");
                $scope.warning = "Enter valid credentials"
                $scope.user = "";

            } else {

                $sessionStorage.id = response.data._id;
                window.localStorage['status'] = true
                $location.path('/profiledata');

            }

        }, function() {

        });
    };
});