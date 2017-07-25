"use strict";

/**
 * Test function factory
 *
 * @param {string} method
 * @return {Function}
 */
function test(method) {
    var values;

    /**
     * Just adds a value using the specified method
     *
     * @param {string} str
     */
    function addValue(str) {
        values.push(str[method](0));
    }

    values = [];
    addValue("a");
    addValue("b");
    addValue("m");
    addValue("m");
    addValue("T");
    addValue("T");
    addValue(" ");
    addValue("*");

    return function () {
        var i, successCount;

        successCount = 0;

        for (i = 0; i < values.length; i += 2) {
            if (values[i] === values[i + 1]) {
                successCount += 1;
            }
        }

        return successCount;
    };
}

module.exports = {
    name: "comparison of values",
    tests: {
        "char comparison": test("charAt"),
        "int comparison": test("charCodeAt")
    }
};
