module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            main:{
                src: [
                  'public/js/libs/modernizr-v2.8.3.js',
                  'public/js/libs/jquery-v1.11.1.js',
                  'public/js/libs/angular.js',
                  'public/js/libs/angular-route.js',
                  'public/js/libs/*.js',
                  'public/js/plugins/*.js',
                  'public/js/main.js'
                ],
                dest: 'public/js/build/all.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                mangle: {
                    except: ['jQuery', 'angular', '$']
                }
            },
            dist: {
                files: {
                    'public/js/build/all.js': ['<%= concat.main.dest %>']
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: true
                },
                files: {
                    'public/css/all.css': 'public/sass/app.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/all.css': 'public/sass/app.scss'
                }
            } 
        },
        watch: {
            js: {
                files: ['public/js/**/*.js'],
                tasks: ['clean:js', 'concat']
            },
            sass: {
              files: ['public/sass/**/*.scss'],
              tasks: ['sass'],
            }
        },
        concurrent: {
          watchAll: {
            tasks: ['watch:js', 'watch:sass'],
            options: {
              logConcurrentOutput: true
            }
          }
        },
        clean: {
            sass: ['.sass-cache'],
            js: ['public/js/build/*']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['clean:js' ,'concat', 'sass:dev', 'clean:sass']);

    grunt.registerTask('dev',  ['clean:js' ,'concat', 'sass:dev','concurrent']);
    grunt.registerTask('build:prod', ['clean:js' ,'concat', 'uglify', 'sass:dev', 'clean:sass']);
};

