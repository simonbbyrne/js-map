module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-jshint'); // load the task

    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
            all: ['Gruntfile.js', 'map.js']
        }
    });

    grunt.registerTask('default', 'jshint');
};