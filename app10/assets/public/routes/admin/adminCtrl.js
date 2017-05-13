angular.module('fullstack').controller('adminCtrl', function($scope, userService){

  
    $scope.results = '';
  
    $scope.getUsers = function(){
        userService.getUsers().then(function(response){
            $scope.results = response.data;
        })
    }

    $scope.getUserById = function(id){
        userService.getUserById(id).then(function(response){
            $scope.results = response.data;
        })
    }











});