// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-modal-select'])

app.controller('MainCtrl', ['$scope', function ($scope) {
  
  $scope.selectables = ['Artigo 1','Artigo 2','Artigo 3','Artigo 4','Artigo 5',
  'Artigo 6', 'Artigo 7', 'Artigo 8', 'Artigo 9', 'Artigo 10', 'Artigo 11'];
  $scope.someModel = $scope.selectables[0] ;  

}]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
