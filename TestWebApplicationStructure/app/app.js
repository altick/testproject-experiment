(function () {
    'use strict';

    angular.module('Config', []);

    angular
        .module('MyApp', [
            'Config',
            'ngAnimate',
            'angular-underscore',
            //'templates',
            'ui.router', 
            'ui.bootstrap',
            'angular-loading-bar',
            //'angularMoment',
            'ngResource'
        ]).run(['$log', '$rootScope', runApp]);

    function runApp($log, $rootScope) {
        $log.info("run");

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.title = toState.title;
            $log.info("state changed");
        });

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParam, $stateParams) {

            $log.info("state started");

        });
    }
})();
