( function() {
    'use strict';

    angular
      .module('bankiNg', ['templates','ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'bankiNg/home.html'
          });
      }]);
  })
();
