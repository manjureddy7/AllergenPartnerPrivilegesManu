 angular.module('myApp').controller('profileCntrl', function($scope, $http, $sessionStorage) {
    console.log("inside profilefgx");
    var id = $sessionStorage.id;
    $http.get('/profiles/' + id).then(function(response) {
        console.log(response);
        $scope.profileData = response.data;
     });

    function update() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
    }
    $scope.update = function() {
        $http.post('/update', $scope.profileData).then(function(response) {
            if (response.data == null) {
                console.log(" not updated");

            } else {
                $scope.updateMessage = "Profile updated successfully";
            }

        }, function() {

        });
    };
});