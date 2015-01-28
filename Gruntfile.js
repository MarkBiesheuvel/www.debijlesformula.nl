module.exports = function (grunt) {

    grunt.initConfig({
        imagemin: {
            source: {
                files: [
                    {
                        expand: true,
                        cwd: 'images/source/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'images/compressed/'
                    }
                ]
            }
        },
        jshint: {
            gruntfile: {
                src: ['Gruntfile.js']
            },
            build: {
                src: ['js/src/*.js']
            }
        },
        uglify: {
            build: {
                src: ['js/src/*.js'],
                dest: 'js/script.min.js',
                options: {
                    preserveComments: false
                }
            }
        },
        compass: {
            build: {
                options: {
                    sassDir: 'css',
                    cssDir: 'css/compiled',
                    environment: 'production'
                }
            }
        },
        watch: {
            config: {
                files: ['Gruntfile.js', 'config.rb'],
                tasks: ['build:css'],
                options: {
                    reload: true
                }
            },
            js: {
                files: ['js/src/*.js'],
                tasks: ['build:js'],
                options: {
                    interrupt: true
                }
            },
            sass: {
                files: 'css/**/*.scss',
                tasks: ['build:css'],
                options: {
                    interrupt: true,
                    sourcemap: true
                }
            },
            livereload: {
                files: ['index.php', 'templates/*.html.twig', 'css/*.css', 'js/*.min.js'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugins
    require('load-grunt-tasks')(grunt);

    grunt.registerTask(
        'build:js',
        'Compile JavaScript',
        ['jshint:build', 'uglify:build']
    );

    grunt.registerTask(
        'build:css',
        'Compile CSS',
        ['compass:build']
    );

    grunt.registerTask('default', ['watch']);

};