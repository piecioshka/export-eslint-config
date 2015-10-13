var lib = require('../../lib/lib.js');

describe('Main architecture', function () {
    it('should check module', function () {
        expect(lib.check).toEqual(jasmine.any(Function));
    });

    it('should convert module to config file', function () {
        expect(lib.convert).toEqual(jasmine.any(Function));
    });

    it('should build new file', function () {
        expect(lib.build).toEqual(jasmine.any(Function));
    });
});
