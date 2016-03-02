module.exports = function(grunt) {
    'use strict';

    var paths = {
        index: 'app/index.html',
        assets: 'app/assets/**/*',
        css: 'app/css/*.css',
        libs: [
            'app/bower_components/phaser/build/phaser.min.js',
            'app/bower_components/mosquitojs/dist/mosquito.min.js'
        ],
        js: [
            'app/js/**/*.js'
        ],
        build: './build/'
  };

    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg : grunt.file.readJSON('package.json'),
        jshint : {
            options : {
                node : true,
                curly : true,
                eqeqeq : true,
                immed : true,
                latedef : true,
                newcap : false,
                noarg : true,
                sub : true,
                undef : true,
                eqnull : true,
                boss : true,
                supernew: true,
                unused: true,
                validthis: true,
                globals: {
                    window: false
                }
            },
            all : {
                src : [
                    'gruntfile.js',
                    paths.js
                    ]
            },
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '0.0.0.0',
                    base: 'app'
                }
            }
        },
        watch: {
            src: {
                options: {
                    livereload: true
                },
                files: [
                    paths.index,
                    paths.css,
                    paths.js,
                    paths.assets
                ]
            }
        },
        nodeunit : {files : ['test/**/*_test.js' ]},
        clean: {
            build: {
                src: paths.build
            }
        },
        copy: {
            assets: {
                src: paths.assets,
                dest: paths.build + 'assets/',
                filter: 'isFile',
                expand: true,
                flatten: true
            },
            libs: {
                src: paths.libs,
                dest: paths.build + 'js/',
                filter: 'isFile',
                expand: true,
                flatten: true
            },
        },
        uglify: {
            src: {
                files: [{
                    src: paths.js,
                    dest: paths.build + 'js/main.min.js'
                }]
            }
        },
        cssmin: {
            src: {
                files: [{
                    src: paths.css,
                    dest: paths.build + 'css/main.min.css'
                }]
            }
        },
        processhtml: {
            src: {
                files: [{
                    src: paths.index,
                    dest: paths.build + 'index.html'
                }]
            }
        },
        htmlmin: {
            src: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    src: paths.build + 'index.html',
                    dest: paths.build + 'index.html'
                }]
            }
        }
    });

    // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', [
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'copy:assets',
        'copy:libs',
        'uglify',
        'cssmin',
        'processhtml',
        'htmlmin'
    ]);
};
