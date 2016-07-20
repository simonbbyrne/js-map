module.exports = function(config) {
    'use strict';

    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'test/*.js'
        ],

        // coverage reporter generates the coverage
        reporters: ['spec', 'coverage'],

        //optionally configure the reporter
        coverageReporter: {
            type: 'text'
        },

        browsers: ['PhantomJS'],

        // source files that you want to generate coverage for
        // do not include tests or libraries
        // these files will be instrumented by Istanbul
        preprocessors: {
            'src/*.js': ['coverage']
        },

        singleRun: true
    });
};