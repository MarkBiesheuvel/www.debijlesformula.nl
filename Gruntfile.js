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
                src: ['js/*.js']
            }
        },
        uglify: {
            build: {
                src: ['js/*.js'],
                dest: 'includes/script.min.js',
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
        penthouse: {
            home : {
                outfile : 'includes/home.css',
                css : 'css/compiled/theme.css',
                url : 'http://dev.debijlesformule.nl/',
                width : 1300,
                height : 900
            },
            overmij : {
                outfile : 'includes/over-mij.css',
                css : 'css/compiled/theme.css',
                url : 'http://dev.debijlesformule.nl/over-mij',
                width : 1300,
                height : 900
            },
            pakketten : {
                outfile : 'includes/pakketten.css',
                css : 'css/compiled/theme.css',
                url : 'http://dev.debijlesformule.nl/pakketten',
                width : 1300,
                height : 900
            },
            contact : {
                outfile : 'includes/contact.css',
                css : 'css/compiled/theme.css',
                url : 'http://dev.debijlesformule.nl/contact',
                width : 1300,
                height : 900
            }
        },
        watch: {
            config: {
                files: ['Gruntfile.js', 'config.rb'],
                tasks: ['build:css', 'build:js'],
                options: {
                    reload: true
                }
            },
            js: {
                files: ['js/*.js'],
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
                files: ['index.php', 'templates/**/*.html.twig', 'css/*.css', 'js/*.min.js'],
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
        ['compass:build', 'penthouse']
    );

    grunt.registerTask(
        'build',
        'Build everything',
        ['build:css', 'build:js']
    );

    grunt.registerTask('default', ['watch']);

};