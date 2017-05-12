angular.module('fullstack').controller('homeCtrl', function($scope, userService){


    $scope.admin = '';
    $scope.status = '';

    $scope.getUsers = function(){
        userService.getUsers().then(function(response){
            console.log(response);
        })
    }

    $scope.getUserById = function(id){
        userService.getUserById(id).then(function(response){
            console.log(response);
        })
    }

    $scope.login = function(userObj){
        userService.login(userObj).then(function(response){
            if (response){
                $scope.admin = response.data.admin;
                $scope.status = response.data.status;
            }else{
                $scope.admin = false;
                $scope.status = response.data.status;
            }

        })
    }






});