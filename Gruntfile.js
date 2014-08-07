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
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'public/css/all.css': 'public/sass/app.scss'       // 'destination': 'source'
                }
            }
        },
        watch: {
            js: {
                files: ['public/js/**/*.js'],
                tasks: [ 'concat' ]
            },
            sass: {
              files: ['public/sass/**/*.scss'],
              tasks: ['sass'],
            }
        },
        concurrent: {
          watchAll: {
            tasks: ['watch'],
            options: {
              logConcurrentOutput: true
            }
          }
        },
        clean: ['.sass-cache']
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concat']);
    grunt.registerTask('dev',  ['concurrent']);
    grunt.registerTask('build:prod', ['concat', 'uglify','sass', 'clean']);
};

