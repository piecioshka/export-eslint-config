#!/usr/bin/env node

var lib = require('../src/main');

function main() {
    var suffix = process.argv[2];
    var eslintConfigModuleDescription = '';
    var rules;

    if (!suffix) {
        console.error('ERROR: Please passed suffix name.\n');
        console.error('Usage:');
        console.error('  export-eslint-config SUFFIX\n');
        console.error('  SUFFIX  Suffix of eslint-config-* project.');
        console.error('          Search project in node_modules directory like eslint-config-SUFFIX,');
        console.error('          covert module to .eslintrc format and export to file.');
        return;
    }

    try {
        // Check that Node.js module exists.
        eslintConfigModuleDescription = lib.check(suffix);
    } catch (e) {
        console.error('ERROR: Please install "eslint-config-' + suffix + '" before attempt to export configuration file!');
        console.error('ERROR: Try to run "npm install eslint-config-' + suffix + '"');
    }

    // Load module and returns JSON format.
    rules = lib.convert(eslintConfigModuleDescription);

    // Build file.
    lib.build(rules);
}

main();
