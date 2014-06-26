module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            main:{
                src: [
                  'public/js/libs/angular.js',
                  'public/js/libs/angular-route.js',
                  'public/js/libs/modernizr-v2.8.3.js',
                  'public/js/libs/jquery-v1.11.1.js',
                  'public/js/libs/lodash.compat-v2.4.1.js',
                  'public/js/plugins/browserVersion.js',
                  'public/js/plugins/smartresize.js',
                  'public/js/main.js'
                ],
                dest: 'public/js/build/all.js'
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                mangle: {
                    except: ['jQuery', 'angular']
                }
            },
            dist: {
                files: {
                    'public/js/build/all.min.js': ['<%= concat.main.dest %>']
                }
            }
        },
        clean: ['.sass-cache']
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['concat']);
    grunt.registerTask('build:prod', ['concat', 'uglify', 'clean']);
};

