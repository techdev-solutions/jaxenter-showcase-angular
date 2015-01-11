define(['angular', 'modules/user/userModule', 'modules/admin/adminModule'], function(angular) {
    'use strict';
    var jax = angular.module('jax', ['jax.user', 'jax.admin']);
    return jax;
});