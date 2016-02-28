module.exports = function(grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg : grunt.file.readJSON('package.json'),
        banner :
            '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> Jeff Brannon;' +
            ' Licensed MIT */\n',
        // Task configuration
        concat : {
          options : {banner : '<%= banner %>', stripBanners : true},
          dist : {src : [ 'app/js/mosquito.js' ], dest : 'dist/mosquito.js'}
        },
        uglify : {
          options : {banner : '<%= banner %>'},
          dist : {src : '<%= concat.dist.dest %>', dest : 'dist/mosquito.min.js'}
        },
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
            gruntfile : {src : 'gruntfile.js'},
            beforeconcat: ['app/js/mosquito.js'],
            afterconcat: ['dist/output.js']
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
                    './app/index.html',
                    './app/css/*.css',
                    './app/js/**/8.js'
                ]
            }
        },
        nodeunit : {files : ['test/**/*_test.js' ]}
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [ 'connect', 'watch' ]);
};
