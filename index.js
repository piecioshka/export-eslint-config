var colors = require('colors');
var lib = require('./lib/lib');

var suffix = process.argv[2];
var modulePath = '';
var rules;

if (!suffix) {
    console.error(colors.red('ERROR: Please passed suffix name.\n'));
    console.error('Usage:');
    console.error('  export-eslint-config SUFFIX\n');
    console.error('  SUFFIX  Suffix of eslint-config-* project.');
    console.error('          Search project in node_modules directory like eslint-config-SUFFIX,');
    console.error('          covert module to .eslintrc format and export to file.');
    return;
}

try {
    // Check that Node.js module exists.
    modulePath = lib.check(suffix);
} catch (e) {
    console.error(colors.red('ERROR: Please install "eslint-config-' + suffix + '" before attempt to export configuration file!'));
    console.error(colors.red('ERROR: Try to run "npm install eslint-config-' + suffix + '"'));
    return;
}

// Load module and returns JSON format.
rules = lib.convert(modulePath);

// Build file.
lib.build(rules);
