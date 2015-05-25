/**
 * Created by banht_000 on 5/19/2015.
 */

var adminApplication = angular.module("VideoApplication", ["ngRoute", "controllers", "flow", "youtube-embed"]);

adminApplication.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'Videos/list.html',
            controller: 'VideoListController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// config flow
adminApplication.config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        target: '/upload',
        permanentErrors:[404, 500, 501]
    };
}]);