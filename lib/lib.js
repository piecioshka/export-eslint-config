var path = require('path');
var fs = require('fs');

const CONFIG_FILE_NAME = '.eslintrc';

module.exports = {
    /**
     * Check that Node.js module is available.
     *
     * @param {string} name ESLint Config suffix.
     */
    check: function (name) {
        var stats;
        var eslintConfigPath = path.resolve('node_modules', 'eslint-config-' + name);

        try {
            stats = fs.lstatSync(eslintConfigPath);
        } catch (e) {
            stats = null
        }

        if (!stats || !stats.isDirectory()) {
            throw new Error('It not a directory!');
        }

        return eslintConfigPath;
    },

    /**
     * Load Node.js module with ESLint configuration and returns pretty-print JSON string.
     *
     * @param {string} eslintConfigPath Path to ESLint configuration Node.js package module.
     * @return {string} Pretty-print JSON.
     */
    convert: function (eslintConfigPath) {
        var eslintConfigModule = require(eslintConfigPath);

        return JSON.stringify(eslintConfigModule, null, 4);
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
