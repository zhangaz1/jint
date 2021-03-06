/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-204.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property, 'desc' is data descriptor, test updating all attribute values of 'name' (15.4.5.1 step 4.c)
 */


function testcase() {
        var arrObj = [1]; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperty(arrObj, "0", {
            value: 1001,
            writable: false,
            enumerable: false,
            configurable: false
        });

        return dataPropertyAttributesAreCorrect(arrObj, "0", 1001, false, false, false);
    }
runTestCase(testcase);
