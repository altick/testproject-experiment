(function () {
    'use strict';

    angular
    .module('MyApp')
    .config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', '$provide', '$compileProvider',
      pamojaConfig]);

    function pamojaConfig($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider, $provide, $compileProvider) {
        //alert('config');

        /**
        * TrackJS errors handling
        * @return {$delegate}
        */
        //$provide.decorator("$exceptionHandler", ["$delegate", "$window", function ($delegate, $window) {
        //    return function (exception, cause) {
        //        if ($window.trackJs) {
        //            $window.trackJs.track(exception);
        //        }
        //        // (Optional) Pass the error through to the delegate
        //        $delegate(exception, cause);
        //    };
        //}]);

        /**
        * Append parameters to every get request to Canvas
        */
        //$httpProvider.interceptors.push('HttpRequest');

        var homeState = {
            url: '/home',
            auth: false,
            title: 'Home',
            views: {
                'main': {
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl',
                    templateUrl: './app/home/views/home.html'
                }
                //'header': {
                //    controller: 'PamojaHeaderController',
                //    controllerAs: 'pamojaHeadCtrl',
                //    templateProvider: function ($templateCache) {
                //        return $templateCache.get('./app/platform/layout/header/views/header.html');
                //    }
                //},
                //'footer': {
                //    templateProvider: function ($templateCache) {
                //        return $templateCache.get('./app/platform/layout/footer/views/footer.html');
                //    }
                //}
            }
        };

        /**
         * States
         */
        $stateProvider
        .state('home', homeState);

        /**
        * Default state of the app, if none of the other matches
        */
        $urlRouterProvider.otherwise('home');
    };

})();
