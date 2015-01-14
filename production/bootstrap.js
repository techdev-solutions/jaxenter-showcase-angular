require.config({
    baseUrl: '.',
    paths: {
        'jQuery': 'lib/jQuery-2.1.3.min',
        'angular': 'lib/angular.min',
        'angular-ui-router': 'lib/angular-ui-router.min'
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