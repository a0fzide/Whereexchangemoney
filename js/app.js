var app = angular.module('WhereExchangeMoney', ['ngMaterial','ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('map', {
            url: '/',
            templateUrl: 'views/map.html',
            controller: 'mapCtrl'
        })

    $urlRouterProvider.otherwise('/');
})

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('amber')
    .warnPalette('indigo');
});
