module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-jshint'); // load the jshint takes
    grunt.loadNpmTasks('grunt-contrib-jasmine'); // load jasmine tasks

    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            },
            all: ['Gruntfile.js', 'map.js']
        },
        jasmine: {
            map: {
                src: 'map.js',
                options: {
                    specs: 'test/*Spec.js',
                }
            }
        }

    });

    grunt.registerTask('default', ['jshint', 'jasmine']);
};