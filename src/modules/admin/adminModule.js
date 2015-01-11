define(['angular', 'angular-ui-router'], function(angular) {
    'use strict';
    var admin = angular.module('jax.admin', ['ui.router']);
    admin.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jax.admin', {
                url: '/admin',
                views: {
                    content: {
                        templateUrl: 'src/modules/admin/admin.html'
                    }
                }
            });
    }]);
    return admin;
});