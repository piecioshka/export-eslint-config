#!/usr/bin/env node

var lib = require('../src/main');

function main() {
    var suffix = process.argv[2];
    var eslintConfigModuleDescription = '';
    var rules;

    if (suffix === '-h' || suffix === '--help') {
        console.log('Usage:');
        console.log('  export-eslint-config <suffix>\n');
        console.log('  Export an installed eslint-config-<suffix> module to a .eslintrc file.\n');
        console.log('Arguments:');
        console.log('  suffix      Suffix of an eslint-config-* package in node_modules');
        console.log('              (e.g. "piecioshka" -> eslint-config-piecioshka).\n');
        console.log('Options:');
        console.log('  -h, --help  Show this help and exit.\n');
        console.log('Example:');
        console.log('  npm install eslint-config-piecioshka');
        console.log('  export-eslint-config piecioshka');
        return;
    }

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
