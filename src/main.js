var path = require('path');
var fs = require('fs');

var CONFIG_FILE_NAME = '.eslintrc';

module.exports = {
    /**
     * Check that Node.js module is available.
     *
     * @param {string} suffix ESLint Config suffix.
     */
    check: function (suffix) {
        var stats;
        var eslintConfigModuleName = 'eslint-config-' + suffix;
        var eslintConfigPath = path.resolve('node_modules', eslintConfigModuleName);

        try {
            stats = fs.lstatSync(eslintConfigPath);
        } catch (e) {
            stats = null
        }

        if (!stats || !stats.isDirectory()) {
            throw new Error('It not a directory!');
        }

        return {
            name: eslintConfigModuleName,
            path: eslintConfigPath
        };
    },

    /**
     * Load Node.js module with ESLint configuration and returns pretty-print JSON string.
     *
     * @param {string} eslintConfigModuleDescription Path to ESLint configuration Node.js package module.
     * @return {string} Pretty-print JSON.
     */
    convert: function (eslintConfigModuleDescription) {
        var eslintConfigModule = require(eslintConfigModuleDescription.path);
        var results = [];

        results.push('// Configuration of: ' + eslintConfigModuleDescription.name + '\n');
        results.push(JSON.stringify(eslintConfigModule, null, 4));

        return results.join('\n');
    },

    /**
     * Create new file with rules.
     */
    build: function (eslintConfigRules) {
        fs.writeFile(CONFIG_FILE_NAME, eslintConfigRules, function (err) {
            if (err) throw err;
            console.log('It is saved!');
        });
    }
};
