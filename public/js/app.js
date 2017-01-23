(function() {
    'use strict';
    angular.module("myApp", ['ngRoute', 'ngStorage']).config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'partial/home.html',
                controller: 'homeCtrl'
            })

            .when("/login", {
                templateUrl: 'partial/logins.html',
                controller: 'loginCtrl'
            })

            .when("/home", {
                templateUrl: 'partial/home.html'
            })

            .when('/profiledata', {
                templateUrl: 'partial/account.html',
                controller: 'AppCntrl',
                resolve: {
                    "check": function($location) {
                        if (window.localStorage['status'] == "false") {
                            $location.path("/");
                        }
                    }
                }
            })

            .when('/logout', {
                templateUrl: 'partial/home.html',
                controller: 'logoutCtrl'
            })

            .when("/profile", {
                resolve: {
                    "check": function($location) {
                        if (window.localStorage['status'] == "false") {
                            $location.path("/");
                        }
                    }
                },
                templateUrl: "partial/profile.html",
                controller: 'profileCntrl'
            })

            .when("/account/level", {
                resolve: {
                    "check": function($location) {
                        if (window.localStorage['status'] == "false") {
                            $location.path("/");
                        }
                    }
                },
                templateUrl: "partial/leveldescription.html"
            })
    });
})();