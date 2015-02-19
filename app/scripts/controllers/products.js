'use strict';

angular.module('esgi.aspectize.controllers.products', [])
.controller('EAProductsCtrl',function($scope, EAProdutsService){

  $scope.product;
  $scope.categories;
  var cat = EAProdutsService.Categories();
  cat.$promise.then(function(){
    $scope.categories = cat.Categories;
    $scope.categories.forEach(function(elem){
      var sub = EAProdutsService.Subcategories({id:elem.CategoryID});
      sub.$promise.then(function(){
        $scope.categories[elem.CategoryID-1].items = sub.Subcategories;
        $scope.categories[elem.CategoryID-1].items.forEach(function(elemSub){
          var prod = EAProdutsService.Products({id:elemSub.SubcategoryID});
          prod.$promise.then(function(){
            $scope.categories[elem.CategoryID-1].items[elemSub.SubcategoryID-1].items= prod.Products;
          });
        });
      });
    });
  });

  $scope.saveProduct = function(product){
    return 0;
  }

  $scope.$watch( 'mytree.currentNode', function( newObj, oldObj ) {
    if( $scope.mytree && angular.isObject($scope.mytree.currentNode) ) {
      $scope.product = angular.copy($scope.mytree.currentNode);
    }
  }, false);


});





































/*
      function(data, error){
        $scope.categories[elem.CategoryID-1].items = data.Subcategories;
      });
      */
  /*
  var setArrays = function(elemName, datas, nextElem){
    var next = nextElem.shift();
    $scope[elemName] = datas[elemName];
    if(next !== undefined && next !== null ){
      $scope[elemName].forEach(function(elem){
        var idx = next.replace('ies', 'y')+'ID';
        idx = idx.replace('Products', 'ProductID');
        var temp = EAProdutsService[next]({id:idx]});
        temp.$promise.then(setArrays(next, temp, nextElem));
      }
    }
  };
  */
