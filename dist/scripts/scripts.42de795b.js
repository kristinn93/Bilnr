"use strict";angular.module("bilnrApp",["ngAnimate","ngRoute","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("bilnrApp").controller("MainCtrl",["$scope","getNumber",function(a,b){a.number="",a.type="",a.registryNumber="",a.registeredAt="",a.nextCheck="",a.weight="",a.num=function(){console.log(a.numbers),b.getN(a.numbers).success(function(b){var c=b.results[0];console.log(c),a.type=c.type,a.registryNumber=c.registryNumber,a.registeredAt=c.registeredAt,a.weight=c.weight,a.status=c.status,a.nextCheck=c.nextCheck}).error(function(a){console.log(a)})}}]),angular.module("bilnrApp").factory("getNumber",["$http",function(a){return{getN:function(b){return a.get("http://apis.is/car?number="+b)}}}]),angular.module("bilnrApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);