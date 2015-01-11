/* global document */
require.config({
    baseUrl: 'src',
    paths: {
        'jQuery': 'lib/jQuery-2.1.3',
        'angular': 'lib/angular',
        'angular-ui-router': 'lib/angular-ui-router'
    },
    shim: {
        'angular': { exports: 'angular', deps: ['jQuery']},
        'jQuery': { exports: '$' },
        'angular-ui-router': ['angular']
    }
});

require(['angular', 'app'], function(angular) {
    'use strict';
    angular.bootstrap(document, ['jax']);
});