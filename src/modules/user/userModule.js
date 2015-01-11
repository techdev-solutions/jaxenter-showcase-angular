define(['angular', './addressBookController', './addressBookService'], function(angular, addressBookController, addressBookService) {
    'use strict';
    var user = angular.module('jax.user', []);
    user.controller('user.addressBookController', addressBookController);
    user.service('user.addressBookService', addressBookService);
    return user;
});