'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jshint: {
			// bug - https://github.com/gruntjs/grunt-contrib-jshint/issues/180
			options: {
				jshintrc: true
			},
			src: ['index.js'],
		},
	});

	grunt.registerTask('default', ['jshint']);
};
