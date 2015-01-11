define(['modules/appender/appender'], function(appender) {
    'use strict';
    return {
        init: function() {
            appender.append();
        }
    };
});