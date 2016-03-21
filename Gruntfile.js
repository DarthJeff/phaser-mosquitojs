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
        build: './dist/'
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
        clean: {
            build: {
                src: paths.build
            }
        },
        copy: {
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
                    dest: paths.build + 'js/phaserGame.module.min.js'
                }]
            }
        }
    });

    // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dist', [
        'clean',
        'copy:libs',
        'uglify'
    ]);
};
