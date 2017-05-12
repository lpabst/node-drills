angular.module('fullstack', ['ui-router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './routes/home/home.html',
                controller: 'homeCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: './routes/admin/admin.html',
                controller: 'adminCtrl'
            })


        $urlRouterProvider.otherwise('/');
    })