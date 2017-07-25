"use strict";

/**
 * Returns undefined.
 *
 * @return {undefined}
 */
function myCallback() {
    return undefined; // eslint-disable-line no-undefined
}

module.exports = {
    name: "passing extra arguments to a function",
    tests: {
        0: function () {
            myCallback();
        },
        1: function () {
            myCallback(1);
        },
        2: function () {
            myCallback(1, this);
        },
        3: function () {
            myCallback(1, this, "str");
        },
        4: function () {
            myCallback(1, this, "str", myCallback);
        },
        5: function () {
            myCallback(1, this, "str", myCallback, null);
        }
    }
};
