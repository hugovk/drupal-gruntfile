'use strict';

module.exports = function(grunt) {

  var globalConfig = {
    // Edit 'mytheme' for your directory structure and change 'style' if needed
    cssBasename: 'style',
    themeDir: 'sites/all/themes/mytheme',
    sourceMapRootpath: '/',
    cssFilename: '<%= globalConfig.themeDir %>/css/<%= globalConfig.cssBasename %>.css',
    lessFilename: '<%= globalConfig.themeDir %>/less/<%= globalConfig.cssBasename %>.less'
  };

  grunt.initConfig({
    globalConfig: globalConfig,

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: '<%= globalConfig.cssFilename %>.map',
          sourceMapRootpath: '<%= globalConfig.sourceMapRootpath %>'
        },
        files: {
          // target.css file: source.less file
          '<%= globalConfig.cssFilename %>': '<%= globalConfig.lessFilename %>'
        }
      }
    },

    autoprefixer: {
      options: {
        map: {
          inline: false
        },
        src: '<%= globalConfig.cssFilename %>',
        dest: '<%= globalConfig.cssFilename %>'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', '<%= globalConfig.themeDir %>/js/**/*.js']
    },

    watch: {
      js: {
        files: [ // which files to watch
          '<%= globalConfig.themeDir %>/js/**/*.js',
          'Gruntfile.js'],
        tasks: ['jshint'],
        options: {
          nospawn: true
        }
      },

      less: {
        files: [ // which files to watch
          '<%= globalConfig.themeDir %>/less//**/*.less',
          'Gruntfile.js'],
        tasks: ['less', 'autoprefixer'],
        options: {
          nospawn: true
        }
      }

    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'less', 'autoprefixer', 'watch']);
};
