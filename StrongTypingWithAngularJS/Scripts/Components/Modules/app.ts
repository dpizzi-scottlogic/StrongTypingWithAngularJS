/// <reference path="../_app.ts" />
module app {
    'use strict';
    angular.module('app', ['ngRoute'])
        .service('appStorage', AppStorage)
        .controller('appCtrl', AppCtrl)
        .directive('changeName', changeName)
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: './partials/app.html',
                controller: 'appCtrl'
            })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
}
 