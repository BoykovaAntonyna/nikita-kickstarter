module.exports = function(grunt) {
	
	// Require it at the top and pass in the grunt instance
	require('jit-grunt')(grunt, {
		scsslint: 'grunt-scss-lint',
		svgcss: 'grunt-svg-css'
	});
	require('time-grunt')(grunt);
	
	if (!grunt.option('port'))
	{
		grunt.option('port', 9002);
	}
	
	if (!grunt.option('livereload-port'))
	{
		grunt.option('livereload-port', grunt.option('port') + 1);
	}
	
	var paths = {
		src: 'source',
		dev: grunt.option('target') || 'build',
		dist: grunt.option('target') || 'dist',
		tmp: 'tmp'
	};
	
	// All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		paths: paths,
		
		// Accessibility Configuration
		accessibility: {
			options : {
				accessibilityLevel: 'WCAG2A',
				reportType: 'txt',
				reportLocation : '<%= paths.dev %>/reports/accessibility',
				reportLevels: {
					notice: true,
					warning: true,
					error: true
				},
				verbose: true
			},
			all : {
				files: [
					{
						cwd: '<%= paths.dev %>/',
						expand: true,
						src: ['*.html']
					}
				]
			}
		},
		
		// Configuration for assemble
		assemble: {
			options: {
				data: '<%= paths.src %>/assemble/data/**/*.{json,yml}',
				helpers: ['handlebars-helper-partial', '<%= paths.src %>/assemble/helpers/**/*.js'],
				layoutdir: '<%= paths.src %>/assemble/layouts/',
				partials: '<%= paths.src %>/assemble/partials/**/*.hbs',
				currentTimestamp: (new Date()).getTime()
			},
			dev: {
				options: {
					production: false
				},
				files: [
					{
						cwd: '<%= paths.src %>/assemble/pages/',
						dest: '<%= paths.dev %>/',
						expand: true,
						flatten: true,
						src: ['**/*.hbs']
					}
				]
			},
			dist: {
				options: {
					data: '<%= paths.tmp %>/gitinfos.json',
					production: true
				},
				files: [
					{
						cwd: '<%= paths.src %>/assemble/pages/',
						dest: '<%= paths.dist %>/',
						expand: true,
						flatten: true,
						src: ['**/*.hbs']
					}
				]
			}
		},
		
		// Configuration for autoprefixer
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			dev: {
				options: {
					map: true
				},
				src: '<%= paths.dev %>/css/*.css'
			},
			dist: {
				src: '<%= paths.dist %>/css/*.css'
			}
		},
		
		// Configuration for deleting files
		clean: {
			options: {
				force: true
			},
			dev: {
				files: [
					{
						src: ['<%= paths.dev %>']
					}
				]
			},
			dist: {
				files: [
					{
						src: ['<%= paths.dist %>']
					}
				]
			},
			docs: {
				dist: ['jsdocs/**/*']
			},
			tmp: {
				files: [
					{
						src: ['<%= paths.tmp %>']
					}
				]
			}
		},
		
		// Configuration for concatenating js files
		concat: {
			options: {
				separator: ';',
				process: function(src, filepath)
				{
					// Add cachebuster for every required file
					if (filepath == '<%= paths.src %>/js/_requireconfig.js')
					{
						return 'require({"urlArgs": "cb=' + (new Date()).getTime()+ '"});' + "\n\n" + src;
					}
					
					return src;
				}
			},
			dev: {
				dest: '<%= paths.dev %>/js/main.js',
				src: ['bower_components/requirejs/require.js', '<%= paths.src %>/js/_requireconfig.js']
			},
			dist: {
				dest: '<%= paths.dist %>/js/main.js',
				src: ['bower_components/requirejs/require.js', '<%= paths.src %>/js/_requireconfig.js', '<%= paths.tmp %>/main.js']
			}
		},
		
		// Configuration for run tasks concurrently
		concurrent: {
			dev1: ['svgcss', 'imagemin:dev'],
			dev2: ['sass:dev', 'assemble:dev', 'modernizr'],
			dist: ['svgcss', 'imagemin:dist'],
		},
		
		// Configuration for livereload
		connect: {
			livereload: {
				options: {
					base: ['', '<%= paths.dev %>'],
					hostname: '0.0.0.0',
					port: grunt.option('port'),
					middleware: function(connect, options) {
						grunt.log.writeln('');
						grunt.log.writeln('Launching webserver now:');
						grunt.log.writeln(' - index at http://0.0.0.0:' + grunt.option('port') + '/');
						grunt.log.writeln('');
						return [
							require('connect-livereload')({
								port: grunt.option('livereload-port')
							}),
							connect.static(options.base[0]),
							connect.static(options.base[1]),
							connect.directory(options.base[1])
						]
					}
				},
				files: {
					src: ['**/*.html']
				}
			}
		},
		
		// Configuration for copying files
		copy: {
			ajax: {
				cwd: '<%= paths.src %>/ajax-content/',
				dest: '<%= paths.dist %>/ajax-content/',
				expand: true,
				src: ['**/*']
			},
			favicon: {
				cwd: '<%= paths.src %>/img/appicons/',
				dest: '<%= paths.dist %>/img/appicons/',
				expand: true,
				src: ['**/*.ico']
			},
			fonts: {
				cwd: '<%= paths.src %>/fonts/',
				dest: '<%= paths.dist %>/fonts/',
				expand: true,
				src: ['**/*']
			},
			js: {
				cwd: '<%= paths.src %>/js/',
				dest: '<%= paths.dist %>/js/',
				expand: true,
				src: ['**/*']
			},
			modernizr: {
				cwd: '<%= paths.tmp %>/',
				dest: '<%= paths.dist %>/js/',
				expand: true,
				src: ['modernizr.js']
			}
		},
		
		// Configuration for minifying css-files
		cssmin: {
			dist: {
				cwd: '<%= paths.dist %>/css/',
				dest: '<%= paths.dist %>/css/',
				expand: true,
				src: ['*.css']
			}
		},
		
		// Configuration for gitinfo (will be populated with values from Git)
		gitinfo: {
			
		},
		
		// Configuration for grouping media queries
		group_css_media_queries: {
			dist: {
				files: {
					'<%= paths.dist %>/css/styles.css': ['<%= paths.dist %>/css/styles.css']
				}
			}
		},
		
		// Configuration for validating html-files
		htmlhint: {
			options: {
				force: true,
				'attr-lowercase': false, // set to false because of svg-attribute 'viewBox'
				'attr-value-double-quotes': false, // set to false because of json inside data-attributes
				'attr-value-not-empty': false, // in HTML5 you don't need to set a value, e.g. itemscope
				'doctype-first': true,
				'doctype-html5': true,
				'id-class-value': true,
				'id-unique': true,
				'img-alt-require': true,
				'space-tab-mixed-disabled': true,
				'spec-char-escape': true,
				'src-not-empty': true,
				'style-disabled': true,
				'tag-pair': true,
				'tag-self-close': true,
				'tagname-lowercase': true
			},
			all: {
				src: ['*/*.html', '!jsdocs/**/*.html']
			}
		},
		
		// Configuration for optimizing image-files
		imagemin: {
			options: {
				optimizationLevel: 7
			},
			dev: {
				files: [
					{
						cwd: '<%= paths.src %>/img/',
						dest: '<%= paths.dev %>/img/',
						expand: true,
						src: ['**/*.{jpg,png,gif}']
					}
				]
			},
			dist: {
				files: [
					{
						cwd: '<%= paths.src %>/img/',
						dest: '<%= paths.dist %>/img/',
						expand: true,
						src: ['**/*.{jpg,png,gif}']
					}
				]
			}
		},
		
		// Configuration for documenting js-files
		jsdoc : {
			all: {
				options: {
					destination: 'jsdocs'
				},
				src: ['<%= paths.src %>/js/modules/**/*.js', '<%= paths.src %>/js/README.md']
			}
		},
		
		// Configuration for validating js-files
		jshint: {
			options: {
				force: true,
				'asi': false,
				'bitwise': false,
				'boss': true,
				'browser': true,
				'curly': false,
				'eqeqeq': false,
				'eqnull': true,
				'evil': false,
				'forin': true,
				'immed': false,
				'indent': 4,
				'jquery': true,
				'laxbreak': true,
				'maxerr': 50,
				'newcap': false,
				'noarg': true,
				'noempty': false,
				'nonew': false,
				'nomen': false,
				'onevar': false,
				'plusplus': false,
				'regexp': false,
				'undef': false,
				'sub': true,
				'strict': false,
				'white': false
			},
			all: {
				options: {
					'-W015': true,
					'-W089': true
				},
				src: [
					'<%= paths.src %>/js/**/*.js'
				]
			}
		},
		
		// Modernizr configuration
		modernizr: {
			all: {
				customTests: ['<%= paths.src %>/js/modernizr/*.js'],
				devFile: 'remote',
				files: {
					src: ['<%= paths.src %>/**/*.js', '<%= paths.src %>/**/*.scss']
				},
				outputFile: '<%= paths.tmp %>/modernizr.js',
				uglify: false
			}
		},
		
		// Configuration for pagespeed
		pagespeed: {
			options: {
				nokey: true,
				url: "http://yoursite.com"
			},
			prod: {
				options: {
					locale: "de_DE",
					strategy: "desktop",
					threshold: 80,
					url: "http://yoursite.com"
				}
			},
			paths: {
				options: {
					locale: "de_DE",
					paths: ["/yourpage1.html", "/yourpage2.html"],
					strategy: "desktop",
					threshold: 80
				}
			}
		},
		
		// Configuration for measuring frontend performance
		phantomas: {
			all : {
				options : {
					indexPath: 'reports/performance/',
					numberOfRuns: 10,
					url: 'http://0.0.0.0:' + grunt.option('port') + '/'
				}
			}
		},
		
		// Configuration for photobox
		photobox: {
			all: {
				options: {
					indexPath: 'reports/screenshots/',
					screenSizes: [ '320', '568', '768', '1024', '1280' ],
					urls: [ 'http://0.0.0.0:' + grunt.option('port') + '/index.html' ]
				}
			}
		},
		
		// Configuration for prettifying the html-code generated by assemble
		prettify: {
			options: {
				condense: false,
				indent: 1,
				indent_char: '	',
				indent_inner_html: false,
				max_preserve_newlines: 1,
				preserve_newlines: true,
				unformatted: [
					"a",
					"b",
					"code",
					"em",
					"i",
					"mark",
					"strong",
					"pre"
				]
			},
			dev: {
				options: {
					brace_style: 'expand'
				},
				files: [
					{
						cwd: '<%= paths.dev %>/',
						dest: '<%= paths.dev %>/',
						expand: true,
						ext: '.html',
						src: ['*.html']
					}
				]
			},
			dist: {
				options: {
					brace_style: 'collapse'
				},
				files: [
					{
						cwd: '<%= paths.dist %>/',
						dest: '<%= paths.dist %>/',
						expand: true,
						ext: '.html',
						src: ['*.html']
					}
				]
			}
		},
		
		// Configuration for requirejs
		requirejs: {
			compile: {
				options: {
					baseUrl: "<%= paths.src %>/js/",
					mainConfigFile: "<%= paths.src %>/js/_requireconfig.js",
					out: "<%= paths.tmp %>/main.js"
				}
			}
		},
		
		// Configuration for SASS
		sass: {
			dev: {
				options: {
					outputStyle: 'nested',
					sourceMap: true,
					includePaths: ['<%= paths.src %>/sass', '']
				},
				files: {
					'<%= paths.dev %>/css/styles.css': '<%= paths.tmp %>/styles.scss',
					'<%= paths.dev %>/css/universal.css': '<%= paths.src %>/sass/universal.scss'
				}
			},
			dist: {
				options: {
					outputStyle: 'nested', // minifying by cssmin-task
					sourceMap: false,
					includePaths: ['<%= paths.src %>/sass', '']
				},
				files: {
					'<%= paths.dist %>/css/styles.css': '<%= paths.tmp %>/styles.scss',
					'<%= paths.dist %>/css/universal.css': '<%= paths.src %>/sass/universal.scss'
				}
			}
		},
		
		// Configuration for SCSS linting
		scsslint: {
			allFiles: [
				'<%= paths.src %>/sass/{blocks,extends,mixins,variables,styles.scss,_*.scss}'
			],
			options: {
				colorizeOutput: true,
				compact: true,
				config: '.scss-lint.yml',
				force: true
			}
		},
		
		// Configuration for string-replacing the svgcss output
		'string-replace': {
			'svgcss-datasvg': {
				files: {
					'<%= paths.tmp %>/svg-bg-extends/_bg-data-svg.scss': '<%= paths.tmp %>/svgcss/_icons-data-svg.scss'
				},
				options: {
					replacements: [{
						pattern: /.%bg-data-svg-/g,
						replacement: '%bg-data-svg-'
					}]
				}
			}
		},
		
		// Configuration for creating SVG-Data-URIs
		svgcss: {
			options: {
				previewhtml: null,
				cssprefix: "%bg-data-svg-"
			},
			all: {
				files: {
					'<%= paths.tmp %>/svgcss/_icons-data-svg.scss': ['<%= paths.tmp %>/svgmin/bgs/*.svg']
				}
			}
		},
		
		// Configuration for optimizing SVG-files
		svgmin: {
			options: {
				 plugins: [
					{ cleanupAttrs: true },
					{ cleanupEnableBackground: true },
					{ cleanupIDs: true },
					{ cleanupListOfValues: true },
					{ cleanupNumericValues: true },
					{ collapseGroups: true },
					{ convertColors: true },
					{ convertPathData: true },
					{ convertShapeToPath: true },
					{ convertStyleToAttrs: true },
					{ convertTransform: true },
					{ mergePaths: true },
					{ moveElemsAttrsToGroup: true },
					{ moveGroupAttrsToElems: true },
					{ removeComments: true },
					{ removeDesc: true },
					{ removeDoctype: true },
					{ removeEditorsNSData: true },
					{ removeEmptyAttrs: true },
					{ removeEmptyContainers: true },
					{ removeEmptyText: true },
					{ removeHiddenElems: true },
					{ removeMetadata: true },
					{ removeNonInheritableGroupAttrs: true },
					{ removeRasterImages: true },
					{ removeTitle: true },
					{ removeUnknownsAndDefaults: true },
					{ removeUnusedNS: true },
					{ removeUselessDefs: true },
					{ removeUselessStrokeAndFill: false }, // Enabling this may cause small details to be removed
					{ removeViewBox: false }, // Keep the viewBox because that's where illustrator hides the SVG dimensions
					{ removeXMLProcInst: false }, // Enabling this breaks svgcss because it removes the XML header
					{ sortAttrs: true },
					{ transformsWithOnePath: false } // Enabling this breaks Illustrator SVGs with complex text
				]
			},
			dev_bg: {
				files: [
					{
						cwd: '<%= paths.src %>/img/bgs/',
						dest: '<%= paths.tmp %>/svgmin/bgs/',
						expand: true,
						ext: '.svg',
						src: ['*.svg']
					}
				]
			},
			dev_file: {
				files: [
					{
						cwd: '<%= paths.src %>/img/',
						dest: '<%= paths.dev %>/img/',
						expand: true,
						ext: '.svg',
						src: ['*.svg', 'temp/*.svg']
					}
				]
			},
			dev_ico: {
				files: [
					{
						cwd: '<%= paths.src %>/img/icons/',
						dest: '<%= paths.tmp %>/svgmin/icons/',
						expand: true,
						ext: '.svg',
						src: ['*.svg']
					}
				]
			},
			dist_bg: {
				files: [
					{
						cwd: '<%= paths.src %>/img/bgs/',
						dest: '<%= paths.tmp %>/svgmin/bgs/',
						expand: true,
						ext: '.svg',
						src: ['*.svg']
					}
				]
			},
			dist_file: {
				files: [
					{
						cwd: '<%= paths.src %>/img/',
						dest: '<%= paths.dist %>/img/',
						expand: true,
						ext: '.svg',
						src: ['*.svg', 'temp/*.svg']
					}
				]
			},
			dist_ico: {
				files: [
					{
						cwd: '<%= paths.src %>/img/icons/',
						dest: '<%= paths.tmp %>/svgmin/icons/',
						expand: true,
						ext: '.svg',
						src: ['*.svg']
					}
				]
			}
		},
		
		// Configuration for building the SVG-sprite
		svgstore: {
			options: {
				prefix : 'icon-',
				formatting : {
					indent_char: '	',
					indent_size : 1
				},
				svg: {
					style: "display: none;"
				}
			},
			dev: {
				files: {
					'<%= paths.dev %>/img/icons/icon-sprite.svg': ['<%= paths.tmp %>/svgmin/icons/*.svg']
				}
			},
			dist: {
				files: {
					'<%= paths.dist %>/img/icons/icon-sprite.svg': ['<%= paths.tmp %>/svgmin/icons/*.svg']
				}
			}
		},
		
		// Configuration for syncing files
		// Task does not remove any files and directories in 'dest' that are no longer in 'cwd'. :'(
		sync: {
			ajax: {
				files: [
					{
						cwd: '<%= paths.src %>/ajax-content/',
						dest: '<%= paths.dev %>/ajax-content/',
						src: '**/*'
					}
				]
			},
			favicon: {
				files: [
					{
						cwd: '<%= paths.src %>/img/appicons/',
						dest: '<%= paths.dev %>/img/appicons/',
						src: '**/*.ico'
					}
				]
			},
			fonts: {
				files: [
					{
						cwd: '<%= paths.src %>/fonts/',
						dest: '<%= paths.dev %>/fonts/',
						src: '**/*'
					}
				]
			},
			js: {
				files: [
					{
						cwd: '<%= paths.src %>/js/',
						dest: '<%= paths.dev %>/js/',
						src: ['**/*', '!_requireconfig.js']
					}
				]
			},
			modernizr: {
 				files: [
					{
						cwd: '<%= paths.tmp %>/',
						dest: '<%= paths.dev %>/js/',
						src: 'modernizr.js'
					}
				]
			}
		},
		
		// Configuration for uglifying JS
		uglify: {
			dist: {
				options: {
					compress: {
						drop_console: true
					}
				},
				files: [
					{
						cwd: '<%= paths.dist %>/js',
						dest: '<%= paths.dist %>/js',
						expand: true,
						src: ['**/*.js', '!**/_*.js']
					}
				]
			}
		},
		
		// Configuration for watching changes
		watch: {
			options: {
				livereload: grunt.option('livereload-port'),
				spawn: true
			},
			scss: {
				files: ['<%= paths.src %>/sass/**/*.scss'],
				tasks: ['sass:dev', 'autoprefixer:dev']
			},
			images: {
				files: ['<%= paths.src %>/img/*', '<%= paths.src %>/img/**/*.{jpg,png,gif}', '!<%= paths.src %>/img/dev/*'],
				tasks: ['newer:imagemin:dev']
			},
			svg_bgs: {
				files: ['<%= paths.src %>/img/bgs/*.svg'],
				tasks: ['newer:svgmin:dev_bg', 'svgcss', 'string-replace']
			},
			svg_files: {
				files: ['<%= paths.src %>/img/*.svg'],
				tasks: ['newer:svgmin:dev_file']
			},
			svg_icons: {
				files: ['<%= paths.src %>/img/icons/*.svg'],
				tasks: ['newer:svgmin:dev_ico', 'svgstore:dev']
			},
			sync_ajax: {
				files: ['<%= paths.src %>/ajax-content/**/*'],
				tasks: ['sync:ajax']
			},
			sync_fonts: {
				files: ['<%= paths.src %>/fonts/**/*'],
				tasks: ['sync:fonts']
			},
			sync_js: {
				files: ['<%= paths.src %>/js/**/*', '!<%= paths.src %>/js/_requireconfig.js'],
				tasks: ['modernizr', 'sync:js']
			},
			sync_requirejs: {
				files: ['<%= paths.src %>/js/_requireconfig.js'],
				tasks: ['modernizr', 'requirejs', 'concat:dev']
			},
			templates: {
				files: ['<%= paths.src %>/assemble/**/*.{json,hbs}'],
				tasks: ['newer:assemble:dev', 'prettify:dev']
			}
		}
	});
	
	// Where we tell Grunt we plan to use this plug-in.
	// done by jit-grunt plugin loader
	
	
	// Where we tell Grunt what to do when we type "grunt" into the terminal.
	
	// Default -> Standard Build task
	grunt.registerTask('default', [
		'build'
	]);
	
	// Development task
	grunt.registerTask('dev', [
		'clean:dev',
		'clean:tmp',
		'svgmin:dev_bg',
		'svgmin:dev_file',
		'svgmin:dev_ico',
		'svgstore:dev',
		'concurrent:dev1',
		'string-replace',
		'generate-tmp-styles-scss',
		'concurrent:dev2',
		'autoprefixer:dev',
		'concat:dev',
		'sync',
		'prettify:dev'
	]);
	
	// Build task
	grunt.registerTask('build', [
		'dev',
		'connect:livereload',
		'watch'
	]);
	
	// Distributing task
	grunt.registerTask('dist', [
		'clean:dist',
		'clean:tmp',
		'clean:docs',
		'svgmin:dist_bg',
		'svgmin:dist_file',
		'svgmin:dist_ico',
		'svgstore:dist',
		'concurrent:dist',
		'string-replace',
		'generate-tmp-styles-scss',
		'sass:dist',
		'gitinfo',
		'write-gitinfos',
		'assemble:dist',
		'modernizr',
		'autoprefixer:dist',
		'group_css_media_queries',
		'cssmin',
		'requirejs',
		'concat:dist',
		'copy:ajax',
		'copy:favicon',
		'copy:fonts',
		'copy:js',
		'copy:modernizr',
		'uglify',
		'prettify:dist'
	]);
	
	// Gitinfos task
	grunt.registerTask('write-gitinfos', 'Write gitinfos to a temp. file', function () {
		grunt.task.requires('gitinfo');
		
		grunt.file.write(paths.tmp+'/gitinfos.json', JSON.stringify({
			gitinfo: grunt.config('gitinfo')
		}));
	});
	
	// task to generate styles.scss without sass-globbing
	grunt.registerTask('generate-tmp-styles-scss', 'Generate styles tmp file', function () {
		var resultContent = grunt.file.read(paths.src+'/sass/styles.scss');
		
		// get rid of ../../-prefix, since libsass does not support them in @import-statements+includePaths option
		resultContent = resultContent.replace(/\"\.\.\/\.\.\//g, '"');
		
		var importMatches = resultContent.match(/^@import.+\*.*$/mg);
		
		if (importMatches) {
			importMatches.forEach(function(initialMatch) {
				// remove all " or '
				var match = initialMatch.replace(/["']/g,'');
				
				// remove the preceeding @import
				match = match.replace(/^@import/g,'');
				
				// lets get rid of the final ;
				match = match.replace(/;$/g,'');
				
				// remove all whitespaces
				match = match.trim();
				
				// get all files, which match this pattern
				var files = grunt.file.expand(
					{
						'cwd': paths.src+'/sass/',
						'filter': 'isFile'
					},
					match
				);
				
				var replaceContent = [];
				
				files.forEach(function(matchedFile)
				{
					replaceContent.push('@import "' + matchedFile + '";');
				});
				
				resultContent = resultContent.replace(initialMatch, replaceContent.join("\n"));
			});
		}
		grunt.file.write(paths.tmp+'/styles.scss', resultContent);
	});
	
	// HTMLHint task
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	
	// SCSSLint task
	grunt.registerTask('check-scss', [
		'scsslint'
	]);
	
	// JSHint task
	grunt.registerTask('check-js', [
		'jshint'
	]);
	
	// Accessibility task
	grunt.registerTask('check-wcag2', [
		'accessibility'
	]);
	
	// Pagespeed task
	grunt.registerTask('measure-pagespeed', [
		'pagespeed'
	]);
	
	// Phantomas task
	grunt.registerTask('measure-performance', [
		'dev',
		'connect:livereload',
		'phantomas'
	]);
	
	// Photobox task
	grunt.registerTask('take-screenshots', [
		'dev',
		'connect:livereload',
		'photobox'
	]);
	
	// JSDoc task
	grunt.registerTask('build-jsdoc', [
		'jsdoc'
	]);
	
};
