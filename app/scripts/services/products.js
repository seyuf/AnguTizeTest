'use strict';

angular.module('esgi.aspectize.services.products', [])

.factory('EAProdutsService', function($http, $resource, $log, $cookies) {
    return $resource( '/',{}, {
      Categories:{
        method:'GET',
        url:'/resources/categories.js'
      },
      Subcategories:{
        method:'GET',
        url:'/resources/category/:id.json',
        Parameters:{id:"@id"}
      }, 
      Products:{
        method:'GET',
        url:'/resources/subcategory/:id.json',
        Parameters:{id:"@id"}
      }
    });
});

