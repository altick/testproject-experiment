(function () {
    'use strict';

    angular
    .module('MyApp')
    .controller('HomeController', [
      '$rootScope', '$log', 'HomeService',
      HomeController]);

    function HomeController($rootScope, $log, HomeService) {
        $log.info('Home controller');

        HomeService.getData().then(function() {
            $log.info("done");
        });
    };
})();