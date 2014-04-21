/**
 * This compares how one can pass the current line and character position
 * around when making tokens.
 */

/*global module*/
(function () {
    'use strict';

    function passData3(var1, var2) {
        return var1 + var2;
    }

    function passData2(var1, var2) {
        return passData3(var1, var2);
    }

    function viaObject3() {
        return this.var1 + this.var2;
    }

    function viaObject2() {
        return viaObject3();
    }

    function test(fn) {
        function run(var1, var2) {
            var context;

            context = {
                var1: var1,
                var2: var2
            };

            fn.call(context, var1, var2);
        }

        return function () {
            run(1, 1);
            run(2, 2);
            run(3, 4);
            run('a', 'b');
            run('c', 'd');
        };
    }

    module.exports = {
        name: "accessing information",
        tests: {
            'passing data': test(function (var1, var2) {
                return passData2(var1, var2);
            }),
            'via object': test(function () {
                return viaObject2();
            })
        }
    };
}());
