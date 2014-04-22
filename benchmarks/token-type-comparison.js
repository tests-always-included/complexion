/*global module*/
(function () {
    'use strict';

    var targetObject, targetString;

    function test(arr, fn) {
        return function () {
            var i;

            for (i = 0; i < arr.length; i += 1) {
                fn(arr[i]);
            }
        };
    }

    targetObject = {};
    targetString = 'TESTTOKEN';

    module.exports = {
        name: "token name comparison",
        tests: {
            'object comparison': test([
                {},
                {},
                {},
                {},
                {}
            ], function (input) {
                return input === targetObject;
            }),
            'string comparison': test([
                'WHITESPACE',
                'SEMICOLON',
                'COMMENT',
                'IDENTIFIER',
                'KEYWORD'
            ], function (input) {
                return input === targetString;
            })
        }
    };
}());
