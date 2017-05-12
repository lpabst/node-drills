angular.module('fullstack').controller('adminCtrl', function($scope, userService){

  
    $scope.results = '';
  
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