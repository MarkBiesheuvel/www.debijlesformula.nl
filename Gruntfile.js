module.exports = function (grunt) {

    grunt.initConfig({
        clean:{
            build: {
                src: ['dist/*.*', 'tmp/*.*']
            },
            tmp: {
                src: 'tmp/'
            }
        },
        copy: {
            build: {
                expand: true,
                cwd: 'src/images/',
                src: '**',
                dest: 'dist/images/',
            },
        },
        jshint: {
            gruntfile: {
                src: ['Gruntfile.js']
            },
            build: {
                src: ['src/js/*.js']
            }
        },
        uglify: {
            build: {
                src: ['src/js/*.js'],
                dest: 'tmp/script.js',
                options: {
                    preserveComments: false
                }
            }
        },
        compass: {
            build: {
                options: {
                    sassDir: 'src/css',
                    cssDir: 'tmp',
                    environment: 'production',
                    importPath: ['node_modules/bootstrap-sass']
                }
            }
        },
        uncss: {
            dist: {
                files: {
                    'tmp/tidy.css': [
                        'tmp/index.html',
                        'tmp/amsterdam.html',
                        'tmp/over-mij.html',
                        'tmp/contact.html',
                        'tmp/bedankt-voor-uw-vraag.html'
                    ]
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/theme.css': 'tmp/tidy.css'
                }
            }
        },
        htmlbuild: {
            options: {
                beautify: false,
                relative: true,
                scripts: {
                    main: 'tmp/script.js'
                }
            },
            index: {
                src: 'src/html/layout.html',
                dest: 'tmp/index.html',
                options: {
                    sections: {
                        templates: 'src/html/pages/index.html'
                    },
                    data: {
                        body_id: 'home',
                        html_title: 'Bijles wiskunde A, B, C en D',
                        html_description: 'Kan je wel wat bijles wiskunde gebruiken? Neem dan contact op met De Bijlesformule.',
                        header_class: 'hero'
                    }
                }
            },
            amsterdam: {
                src: 'src/html/layout.html',
                dest: 'tmp/amsterdam.html',
                options: {
                    sections: {
                        templates: 'src/html/pages/amsterdam.html'
                    },
                    data: {
                        body_id: 'amsterdam',
                        html_title: 'Bijles wiskunde A, B, C en D in Amsterdam',
                        html_description: 'De Bijlesformule geeft wiskundebijles in Amsterdam. Kan je wel wat bijles wiskunde gebruiken? Neem dan contact op met De Bijlesformule.',
                        header_class: 'normal'
                    }
                }
            },
            over_mij: {
                src: 'src/html/layout.html',
                dest: 'tmp/over-mij.html',
                options: {
                    sections: {
                        templates: 'src/html/pages/over-mij.html'
                    },
                    data: {
                        body_id: 'about-us',
                        html_title: 'Over mij',
                        html_description: '',
                        header_class: 'normal'
                    }
                }
            },
            contact: {
                src: 'src/html/layout.html',
                dest: 'tmp/contact.html',
                options: {
                    sections: {
                        templates: 'src/html/pages/contact.html'
                    },
                    data: {
                        body_id: 'contact-us',
                        html_title: 'Contact',
                        html_description: '',
                        header_class: 'normal'
                    }
                }
            },
            bedankt_voor_uw_vraag: {
                src: 'src/html/layout.html',
                dest: 'tmp/bedankt-voor-uw-vraag.html',
                options: {
                    sections: {
                        templates: 'src/html/pages/bedankt-voor-uw-vraag.html'
                    },
                    data: {
                        body_id: '',
                        html_title: 'Bedankt voor uw vraag',
                        html_description: '',
                        header_class: 'normal'
                    }
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'tmp/index.html',
                    'dist/amsterdam.html': 'tmp/amsterdam.html',
                    'dist/over-mij.html': 'tmp/over-mij.html',
                    'dist/contact.html': 'tmp/contact.html',
                    'dist/bedankt-voor-uw-vraag.html': 'tmp/bedankt-voor-uw-vraag.html'
                }
            }
        },
        watch: {
            config: {
                files: ['Gruntfile.js', 'config.rb'],
                tasks: ['build'],
                options: {
                    reload: true
                }
            },
            html: {
                files: ['src/html/**/*.html'],
                tasks: ['build'],
                options: {
                    interrupt: true
                }
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['build'],
                options: {
                    interrupt: true
                }
            },
            sass: {
                files: 'css/**/*.scss',
                tasks: ['build'],
                options: {
                    interrupt: true
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
        'build',
        'Build everything',
        ['clean:build', 'uglify', 'compass', 'htmlbuild', 'uncss', 'htmlmin', 'cssmin', 'clean:tmp', 'copy']
    );

    grunt.registerTask('default', ['watch']);

};