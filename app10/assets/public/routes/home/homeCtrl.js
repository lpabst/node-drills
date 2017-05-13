angular.module('fullstack').controller('homeCtrl', function($scope, userService){


    $scope.admin = '';
    $scope.status = '';
    $scope.showContinueButton = false;


    

    $scope.login = function(userObj){
        userService.login(userObj).then(function(response){
            if (response){
                $scope.admin = response.data.admin;
                $scope.status = response.data.status;
                if (response.data.admin){
                    $scope.showContinueButton = true;
                }
            }else{
                $scope.admin = false;
                $scope.status = response.data.status;
            }

        })
    }






});