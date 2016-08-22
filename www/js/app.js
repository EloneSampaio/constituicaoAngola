// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', ['ionic', 'ionic-modal-select', 'firebase'])


app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuTop': {
          templateUrl: 'templates/menutop.html',
          controller: 'artigoController',
          controllerAs: 'vm'
        },
        'conteudo': {
          templateUrl: 'templates/artigo.html',
          controller: 'artigoController',
          controllerAs: 'vm'
        }
      }
    })

    .state('app.home/artigo', {
      url: '/home/artigo/:id',

      templateUrl: 'templates/artigoDetalhe.html',
      controller: 'artigoDetalheController',
      controllerAs: 'vm'


    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
      firebase.util.logLevel(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
