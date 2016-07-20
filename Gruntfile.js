module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-jshint'); // load the jshint takes
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
            all: ['Gruntfile.js', 'karma.conf.js', 'src/*.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
            }
        }
    });

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('unit', ['karma']);
    grunt.registerTask('test', ['lint', 'karma']);

};