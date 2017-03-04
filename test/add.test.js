var add = require('./add.js');
var expect = require('chai').expect;

describe('macha 测试', function() {
    it ('1 + 1 should be 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
});