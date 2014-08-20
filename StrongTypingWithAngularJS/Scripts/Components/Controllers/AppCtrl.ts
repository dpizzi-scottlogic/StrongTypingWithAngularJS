/// <reference path="../_app.ts" />
module app {
    'use strict';
    export interface IAppCtrlScope extends ng.IScope {
        greeting: string;
        changeName(name): void;
    }
    export class AppCtrl {
        public static $inject = [
            '$scope',
            'appStorage'
        ];
        constructor(private $scope: IAppCtrlScope, private appStorage: AppStorage) {
            $scope.greeting = appStorage.get('name') !== '' ? 'Hello ' + appStorage.get('name') + ' !' : 'Hello you !';
            $scope.changeName = (name) => {
                appStorage.set('name', name);
                $scope.greeting = 'Hello ' + name + ' !';
            }
        }
    }
}