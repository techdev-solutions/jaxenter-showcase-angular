module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            compile: {
                files: [{
                    src: ['src/modules/**/*.js', 'Gruntfile.js', 'src/app.js']
                }],
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {   // all minified libraries, path flattened
                        expand: true,
                        flatten: true,
                        cwd: '.',
                        dest: 'out/lib/',
                        src: ['src/lib/**/*.min.js'],
                        filter: 'isFile'
                    },
                    {   // css files
                        dest: 'out/',
                        src: ['css/bootstrap.min.css']
                    },
                    {   // template files
                        expand: true,
                        dest: 'out/',
                        src: ['src/**/*.html']
                    },
                    {   // production only files
                        expand: true,
                        cwd: 'production/',
                        dest: 'out/',
                        src: ['index.html', 'bootstrap.js']
                    }
                ]
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src',
                    mainConfigFile: 'bootstrap.js',
                    include: ['app'], // build the file outgoing from the app.js require dependencies
                    out: 'out/app.js',
                    paths: { // don't include the libraries!
                        'jQuery': 'empty:',
                        'angular': 'empty:',
                        'angular-ui-router': 'empty:'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'copy', 'requirejs']);
};