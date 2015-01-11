/* global document */
require.config({
    baseUrl: 'src',
    paths: {
        'jQuery': 'lib/jQuery-2.1.3',
        'angular': 'lib/angular'
    },
    shim: {
        'angular': { exports: 'angular', deps: ['jQuery']},
        'jQuery': { exports: '$' }
    }
});

require(['angular', 'app'], function(angular) {
    'use strict';
    angular.bootstrap(document, ['jax']);
});