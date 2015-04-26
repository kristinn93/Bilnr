'use strict';

/**
 * @ngdoc function
 * @name bilnrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bilnrApp
 */
angular.module('bilnrApp')
  .controller('MainCtrl', function ($scope, getNumber) {
    $scope.number = '';
    $scope.type = '';
    $scope.registryNumber = '';
    $scope.registeredAt = '';
    $scope.nextCheck = '';
    $scope.weight = '';
    $scope.num = function() {
        console.log($scope.numbers);

        getNumber.getN($scope.numbers).success( function (info) {
            var data = info.results[0];
            console.log(data);
            $scope.type = data.type;
            $scope.registryNumber = data.registryNumber;
            $scope.registeredAt = data.registeredAt;
            $scope.weight = data.weight;
            $scope.status = data.status;
            $scope.nextCheck = data.nextCheck;
        }).error( function (errormsg) {
            console.log(errormsg);
        });
    };
  });

angular.module('bilnrApp').factory('getNumber', function ($http){
    return {
        getN: function (getData) {
            return $http.get('http://apis.is/car?number=' + getData);
        }
    };
});