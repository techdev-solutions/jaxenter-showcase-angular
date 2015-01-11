define(['angular', 'angular-ui-router', 'modules/user/userModule', 'modules/admin/adminModule'], function(angular) {
    'use strict';
    var jax = angular.module('jax', ['ui.router', 'jax.user', 'jax.admin']);
    jax.config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('jax', {
                url: '',
                abstract: true,
                views: {
                    root: {
                        templateUrl: 'src/app.html'
                    }
                }
            })
            .state('jax.index', {
                url: '',
                views: {
                    content: {
                        templateUrl: 'src/moduleSelection.html'
                    }
                }
            });
    }]);
    return jax;
});