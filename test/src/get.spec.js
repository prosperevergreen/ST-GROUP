import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;

import get from "../../src/get.js";

const object = { 'w': [{ 'x': { 'y': 3 } }] }

describe('get.js', () => {
    it('get object "w" - Pass', () => {
        const result = get(object, 'w');
        const expect = ([{ 'x': { 'y': 3 } }]);
        assert.deepEqual(result, expect);
    });
    it('get object "wxy" - Fail', () => {
        const result = get(object, 'wxy');
        const expect = ([{ 'x': { 'y': 3 } }]);
        assert.notDeepEqual(result, expect);
    });
    it('get object "x" - Pass', () => {
        const result = get(object, 'w[0].x.y');
        const expect = (3);
        assert.deepEqual(result, expect);
    });
});