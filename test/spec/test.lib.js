'use strict';

var colors = require('colors');
var lib = require('../../lib/lib.js');

console.log(colors.yellow('* Before run please install "eslint-config-piecioshka"\n'));

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

    describe('checking', function () {
        it('should throw an error when can not find package', function () {
            expect(function () {
                lib.check(null);
            }).toThrow();

            expect(function () {
                lib.check('');
            }).toThrow();

            expect(function () {
                lib.check('xxx');
            }).toThrow();
        });

        it('should return description object', function () {
            expect(function () {
                lib.check('piecioshka');
            }).not.toThrow();

            expect(lib.check('piecioshka').name).toEqual('eslint-config-piecioshka');
        });
    });
});
