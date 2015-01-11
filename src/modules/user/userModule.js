define(['angular', './addressBookController', './addressBookService', 'angular-ui-router'], function(angular, addressBookController, addressBookService) {
    'use strict';
    var user = angular.module('jax.user', ['ui.router']);
    user.controller('user.addressBookController', addressBookController);
    user.service('user.addressBookService', addressBookService);

    user.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jax.user', {
                url: '/user',
                views: {
                    content: {
                        templateUrl: 'src/modules/user/addressBook.html',
                        controller: 'user.addressBookController'
                    },
                    navbar: {
                        templateUrl: 'src/modules/user/userNavbar.html'
                    }
                }
            });
    }]);
    return user;
});