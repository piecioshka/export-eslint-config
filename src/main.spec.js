"use strict";

var path = require('path');
var fs = require('fs');
var lib = require("./main");

function createDirectoryHelper(folderName) {
    var folder = path.resolve('node_modules', 'eslint-config-' + folderName);
    fs.mkdirSync(folder);
}

function removeDirectoryHelper(folderName) {
    var folder = path.resolve('node_modules', 'eslint-config-' + folderName);
    fs.rmSync(folder, { recursive: true, force: true });
}

describe("General", function () {
    it("should throw an error when can not find package", function () {
        expect(function () {
            lib.check("");
        }).toThrow();

        expect(function () {
            lib.check("xxx");
        }).toThrow();
    });

    it("should return description object", function () {
        createDirectoryHelper('piecioshka');

        expect(function () {
            lib.check("piecioshka");
        }).not.toThrow();

        expect(lib.check("piecioshka").name).toEqual(
            "eslint-config-piecioshka"
        );

        removeDirectoryHelper('piecioshka');
    });
});
