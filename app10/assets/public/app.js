angular.module('fullstack', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/',
                // This route is always from index.html, regardless if you
                // are using Gulp or not.
                templateUrl: './public/routes/home/home.html',
                controller: 'homeCtrl'
            })
            .state('admin', {
                url: '/admin',
                // This route is always from index.html, regardless if you
                // are using Gulp or not.
                templateUrl: './public/routes/admin/admin.html',
                controller: 'adminCtrl'
            })
            .state('about', {
                url: '/about',
                // This route is always from index.html, regardless if you
                // are using Gulp or not.
                templateUrl: './public/routes/about/about.html',
                // controller: 'adminCtrl'
            })


        $urlRouterProvider.otherwise('/');
    })