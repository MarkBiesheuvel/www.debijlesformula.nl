module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
            source: {
                files: [{
                    expand: true,
                    cwd: 'images/source/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/compressed/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['jshint']);

};