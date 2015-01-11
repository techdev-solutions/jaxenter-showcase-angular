require.config({
    baseUrl: 'src',
    paths: {
        'jQuery': 'lib/jQuery-2.1.3'
    },
    shim: {
        'jQuery': { exports: '$' }
    }
});

require(['app'], function(app) {
    'use strict';
    app.init();
});