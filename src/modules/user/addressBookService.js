define([], function() {
    'use strict';
    var addresses = [
        { name: 'Schulze', firstName: 'Moritz', city: 'Berlin' },
        { name: 'Hanschke', firstName: 'Alexander', city: 'Karlsruhe' },
        { name: 'Krion', firstName: 'Adrian', city: 'Darmstadt' }
    ];
    return ['$q', '$timeout', function($q, $timeout) {
        function loadAddressBook() {
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(addresses);
            }, 100);
            return deferred.promise;
        }

        return {
            loadAddressBook: loadAddressBook
        };
    }];
});