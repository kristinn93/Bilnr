'use strict';

/**
 * @ngdoc overview
 * @name bilnrApp
 * @description
 * # bilnrApp
 *
 * Main module of the application.
 */
angular
  .module('bilnrApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
