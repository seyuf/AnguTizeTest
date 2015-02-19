'use strict';

/**
 * @ngdoc overview
 * @name esgiAspectiseApp
 * @description
 * # esgiAspectiseApp
 *
 * Main module of the application.
 */
angular
  .module('esgiAspectiseApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularTreeview',
    'ngCookies',
    'esgi.aspectize.services.products',
    'esgi.aspectize.controllers.products'
  ])
  .config(function ($routeProvider, $httpProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

