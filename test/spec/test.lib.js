var lib = require('../../lib/lib.js');

describe('Main architecture', function () {
    it('should read module', function () {
        expect(lib.read).toEqual(jasmine.any(Function));
    });

    it('should convert module to config file', function () {
        expect(lib.convert).toEqual(jasmine.any(Function));
    });

    it('should build new file', function () {
        expect(lib.build).toEqual(jasmine.any(Function));
    });
});
