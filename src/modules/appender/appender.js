define(['jQuery'], function($) {
    'use strict';
    function append() {
        $('#app').html(
            '<span>Created with jQuery!</span>'
        );
    }
    return {
        append: append
    };
});