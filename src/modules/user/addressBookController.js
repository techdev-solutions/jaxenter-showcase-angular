define([], function() {
    'use strict';
    return ['$scope', 'user.addressBookService', function($scope, addressBookService) {
        addressBookService.loadAddressBook().then(function(addresses) {
            $scope.addresses = addresses;
        });
    }];
});