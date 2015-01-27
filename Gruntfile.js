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
        compass: {
            build: {
                options: {
                    sassDir: 'css',
                    cssDir: 'css/compiled',
                    environment: 'production'
                }
            },
        },
        watch: {
            config: {
                files: ['Gruntfile.js', 'config.rb'],
                tasks: ['build:css'],
                options: {
                    reload: true
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
                files: ['index.php', 'templates/*.html.twig', 'css/*.css'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load the plugins
    require('load-grunt-tasks')(grunt);

    grunt.registerTask(
        'build:css',
        'Compile CSS',
        ['compass:build']
    );

    grunt.registerTask('default', ['watch']);

};