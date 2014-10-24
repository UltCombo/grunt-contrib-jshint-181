'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: true
			},
			src: ['index.js'],
		},
	});

	grunt.registerTask('default', ['jshint']);
};
