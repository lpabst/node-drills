angular.module('fullstack').service('userService', function($http){

this.getUsers = function(){
    return $http.get('/api/users');
}

this.getUserById = function(id){
    return $http.get('/api/users/' + id);
}







});