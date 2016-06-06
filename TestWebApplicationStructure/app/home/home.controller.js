(function () {
    'use strict';

    angular
    .module('MyApp')
    .controller('HomeController', [
      '$rootScope','$log', '$resource',
      HomeController]);

    function HomeController($rootScope, $log, $resource) {
        $log.info('Home controller');

        $resource('/api/values').query().$promise.then(function() {
            $log.info("done");
        });
    };
})();