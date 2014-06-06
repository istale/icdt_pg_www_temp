// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'utility']);

app.value('$', $);

app.run(function ($ionicPlatform, PushProcessingService) {
    $ionicPlatform.ready(function () {
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    // Push Notification
    PushProcessingService.initialize();
});

//app.run(function (PushProcessingService) {
//    //run once for the app
//    PushProcessingService.initialize();
//});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
            templateUrl: "templates/search.html",
            controller: 'SignalRAngularCtrl'
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    })
    .state('app.thumbnail', {
        url: "/thumbnail",
        views: {
            'menuContent': {
                templateUrl: "templates/thumbnail.html",
                controller: 'ThumbnailCtrl'
            }
        }
    })
    .state('app.cards', {
        url: "/cards",
        views: {
            'menuContent': {
                templateUrl: "templates/cards.html"
            }
        }
    })
    .state('app.slides', {
        url: "/slides",
        views: {
            'menuContent': {
                templateUrl: "templates/slides.html",
                controller: 'SlidesCtrl'
            }
        }
    })
    .state('app.camera_canvas', {
        url: "/camera_canvas",
        views: {
            'menuContent': {
                templateUrl: "templates/camera_canvas.html",
                controller: 'CameraCanvasCtrl'
            }
        }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

