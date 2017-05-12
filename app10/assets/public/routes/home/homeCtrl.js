angular.module('fullstack').controller('homeCtrl', function($scope, userService){

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








});