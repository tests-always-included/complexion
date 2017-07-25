"use strict";

/**
 * Test function
 *
 * @return {undefined}
 */
function myCallback() {
    return undefined; // eslint-disable-line no-undefined
}

module.exports = {
    name: "calling a function",
    tests: {
        direct: function () {
            myCallback();
        },
        call: function () {
            myCallback.call();
        }
    }
};
