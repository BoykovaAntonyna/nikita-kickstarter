# nikita.kickstarter

This is our toolbelt how to start a new project from scratch.

Latest Release: [![GitHub version](https://badge.fury.io/gh/nikita-kit%2Fnikita-kickstarter.png)](https://github.com/nikita-kit/nikita-kickstarter/releases)

If you're interested in HTML patterns, code snippets and best practices, try [nikita.html](https://github.com/nikita-kit/nikita-html).
If you want to write efficient and scalable (S)CSS-code for big websites, try [nikita.css](https://github.com/nikita-kit/nikita-css).  


## Project-Setup

- [__Grunt__](http://gruntjs.com/) – js task runner
- [__Assemble__](http://assemble.io/) – static site generator
- [__SASS__](http://sass-lang.com/) with [__LibSass__](http://libsass.org/) – css preprocessing
- [__nikita.html__](https://github.com/nikita-kit/nikita-html) – HTML conventions and coding guidelines
- [__nikita.css__](https://github.com/nikita-kit/nikita-css) – (S)CSS conventions and coding guidelines
- [__nikita.js__](https://github.com/nikita-kit/nikita-js) – JS conventions and coding guidelines
- [__Bower__](http://bower.io/) – package manager for frontend libraries
- [__SCSS-Lint__](http://rubygems.org/gems/scss-lint/versions) – linter for SCSS files
- [__Livereload__](http://livereload.com/) – browser auto refresh

Grunt depends on [node.js](http://nodejs.org), SCSS-Lint depends on [Ruby](http://www.ruby-lang.org). Some of the [Grunt plugins](#grunt-plugins-used) depend on command line tools to be installed on your (build) system.


## Requirements

These are the minimum requirements for the project setup:  
 
- [__Node.js & Node Package Manager__](http://nodejs.org)
- [__Grunt Command Line Interface__](http://gruntjs.com/getting-started) – `sudo npm install -g grunt-cli`
- [__Bower__](http://bower.io) – `sudo npm install -g bower`
- [__SCSS Lint__](http://rubygems.org/gems/scss-lint/versions) – `sudo gem install scss-lint`

If you want to use the browser-auto-refresh-feature, get [__LiveReload.js__](https://github.com/livereload/livereload-js) and install it to the root-folder of localhost.


## Getting started

Open your preferred command line tool and choose your project directory.

Either use `./setup-dev-env.sh`. This will start a shell script to check requirements, then runs `npm install` and `bower install` automatically to install Grunt and [Grunt plugins](#grunt-plugins-used) required for the build script plus Bower and [Bower packages](#bower-packages-used).

Or use `npm install` and `bower install` if your are on Windows (you have to check the requirements manually). This will install Grunt and [Grunt plugins](#grunt-plugins-used) required for the build script plus Bower and [Bower packages](#bower-packages-used).

1. `grunt` or `grunt build` – start build script
2. [http://localhost:9002/](http://localhost:9002/) or [http://0.0.0.0:9002/](http://0.0.0.0:9002/) – watch your build-directory in the browser (livereload is running on port 9002)
3. `grunt dist` – start distribution build script

If you want to specify a different port, you can start the script with the `--port` option:
`grunt --port=9010` will launch the webserver on [http://0.0.0.0:9010/](http://0.0.0.0:9010/)


## Grunt-Devtools

If you dont't like the command line you can use an alternative called [grunt-devtools](https://github.com/vladikoff/grunt-devtools) for the Chrome browser to start the grunt tasks.

1. Download the [Grunt Devtools extension for Chrome Developer Tools](https://chrome.google.com/webstore/detail/grunt-devtools/fbiodiodggnlakggeeckkjccjhhjndnb?hl=en) from the Chrome Web Store.
2. Global install via `npm install -g grunt-devtools`.
3. Run `grunt-devtools` in a directory with a Gruntfile.
4. Open Chrome Devtools and find the __Grunt tab__. Your grunt tasks should now be accessible from within Chrome.


## Grunt-Notifications

You don't like to stare permanently on your console? So wouldn’t it be great if your system could notify you when your fresh build is ready to consume or when anything bad happened? Meet [grunt-notify](https://github.com/dylang/grunt-notify), an automatic desktop notification service for Grunt using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center and Notify-Send. Just install this plugin via npm and load it in your Gruntfile.


## Grunt-Plugins used

- [assemble](https://github.com/assemble/assemble)
- [bower](https://github.com/bower/bower)
- [connect-livereload](https://github.com/intesso/connect-livereload)
- [grunt](https://github.com/gruntjs/grunt)
- [grunt-accessibility](https://github.com/yargalot/grunt-accessibility)
- [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
- [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent)
- [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
- [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
- [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
- [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-gitinfo](https://github.com/damkraw/grunt-gitinfo)
- [grunt-group-css-media-queries](https://github.com/Se7enSky/grunt-group-css-media-queries)
- [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint)
- [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc)
- [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr)
- [grunt-newer](https://github.com/tschaub/grunt-newer)
- [grunt-pagespeed](https://github.com/jrcryer/grunt-pagespeed)
- [grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas)
- [grunt-photobox](https://github.com/stefanjudis/grunt-photobox)
- [grunt-prettify](https://github.com/jonschlinkert/grunt-prettify)
- [grunt-sass](https://github.com/sindresorhus/grunt-sass)
- [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
- [grunt-string-replace](https://github.com/erickrdch/grunt-string-replace)
- [grunt-svg-css](https://github.com/psyrendust/grunt-svg-css)
- [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin)
- [grunt-svgstore](https://github.com/FWeinb/grunt-svgstore)
- [grunt-sync](https://github.com/tomusdrw/grunt-sync)
- [handlebars-helper-autolink](https://github.com/helpers/handlebars-helper-autolink)
- [handlebars-helper-partial](https://github.com/helpers/handlebars-helper-partial)
- [handlebars-helpers](https://github.com/assemble/handlebars-helpers)
- [jit-grunt](https://github.com/shootaroo/jit-grunt)
- [time-grunt](https://github.com/sindresorhus/time-grunt)


## Bower-Packages used

- [backbone](https://github.com/components/backbone)
- [jquery](http://jquery.com/)
- [jsb](https://github.com/DracoBlue/jsb)
- [logging.js](https://github.com/DracoBlue/logging-js)
- [nikita.css](https://github.com/nikita-kit/nikita-css)
- [requirejs](https://github.com/jrburke/requirejs)
- [requirejs-text](https://github.com/requirejs/text)
- [underscore](https://github.com/jashkenas/underscore)


## Project structure

The kickstart-setup provides the three main folders `source/`, `build/` and `dist/`. All source-files will be put to the `source`-folder like templates, fonts, images, js- and sass-files. These files will be processed by several grunt tasks – e.g. grunt-sass: sass -> css – and then stored in the `build`-folder. From there you can view the generated html-files in the browser. The `dist`-folder is built up like the `build`-folder. The main difference between `build/` and `dist/` is, that `dist/` has combined and minified css/js files, no unnecessary files or code-comments. The `build`-folder is for debugging your files, the `dist-`folder should be used for production.

```
$ tree -d -I node_modules
.
├── bower_components
├── build
│   ├── ajax-content
│   ├── bower_components
│   ├── css
│   ├── fonts
│   ├── img
│   │   ├── appicons
│   │   └── bgs
│   └── js
│       └── modernizr
├── dist
│   ├── ajax-content
│   ├── bower_components
│   ├── css
│   ├── fonts
│   ├── img
│   │   ├── appicons
│   │   └── bgs
│   └── js
│       └── modernizr
├── source
│   ├── ajax-content
│   ├── assemble
│   │   ├── data
│   │   ├── helpers
│   │   ├── layouts
│   │   ├── pages
│   │   └── partials
│   ├── fonts
│   ├── img
│   │   ├── appicons
│   │   ├── bgs
│   │   ├── dev
│   │   ├── icons
│   │   └── temp
│   ├── js
│   │   └── modernizr
│   └── sass
│       ├── blocks
│       ├── extends
│       ├── mixins
│       └── variables
└── tmp
    ├── svgcss
    ├── svg-bg-extends
    └── svgmin
        └── bgs
```


## HTML

For the HTML structure, please have a look at [nikita.html](https://github.com/nikita-kit/nikita-html). This sub project
describes the HTML coding standards and conventions.


## CSS

For the CSS structure, please have a look at [nikita.css](https://github.com/nikita-kit/nikita-css). This sub project
describes the CSS coding standards and conventions.


## Javascript

For the JS structure, please have a look at [nikita.js](https://github.com/nikita-kit/nikita-js). This sub project
describes the JS coding standards and conventions.

The page will contain two parts of javascript.

The first part is in `assemble/layouts/lyt-default.hbs` at the beginning:

``` html
<script src="js/modernizr.js"></script>
```

It ensures that the html5shiv is loaded and modernizr is ready. The modernizr file is generated automagically with all modernizr features, which are used in your `sass/**/*.sass` and `js/**/*.js` files. The `js/modernizr` folder contains custom tests for modernizr. Those will be added to the `modernizr.js`, too.

The second part is at the end of the file (before the closing `</body>` tag:

``` html
<script data-main="app" src="js/main.js"></script>
```

The `data-main` attribute ensures, that the app.js will be loaded (as soon as main.js is ready). The `js/main.js` file is generated by using the project specific `js/_requireconfig.js` and the generic requirejs.js from bower components. For dist mode the main.js file contains everything, which is `require`d or `include`d in the `js/_requireconfig.js`.


## Icon-Workflow

There're two possible ways to use icons.


### SVG-Sprite

You'd like to edit your icons with CSS, e.g. to change the fill-color or you have one and the same icon in different colors? Then this is your choice.

1. Just put your SVG-icons into `source/img/icons`.
2. All icons will be processed with the svgmin-task and put into the `tmp/svgmin/icons` folder.
3. Afterwards the svgstore-task uses these icons to put together an `icon-sprite.svg` which will be copied to the `img/icons` folder. It must be injected with ajax directly after the opening `<body>` element at the top of the document (have a look at the file `lyt-default.hbs` in the `layouts` folder).
4. To include a SVG-icon use `<svg class="your-class-name"><use xlink:href="#filename" /></svg>` in your .hbs-files. Make sure you use a class name on the SVG to size it.
5. Now you can use `.your-class-name { fill: #f30; }` to color your icon.

For further infos read the article [Icon System with SVG sprites](http://css-tricks.com/svg-sprites-use-better-icon-fonts/) by Chris Coyier.


### Data-URIs

If you have to include your icon as a background-image, e.g. because you can't simply add a `svg` element, then you should use this method.

1. Just put your SVG-icons into `source/img/bgs`.
2. All icons will be processed with the svgmin-task and put into the `tmp/svgmin/bgs` folder.
3. Afterwards the svgcss-task uses these icons to produce SCSS-files (all icons are included as data-URIs in the form of SASS-placeholders), which will be put into `tmp/svgcss` folder.
4. These SCSS-files will now be processed by the string-replace-task to get different placeholder-extends. They are saved into `tmp/svg-bg-extends` folder.
5. Now you can include your icons by using the `_svg-background.scss` mixin. Just type `@include svg-background(name-of-your-icon);`.


## Questions?

If you're asking yourself »Why not …?« have a look at my [WHYNOT.md](https://github.com/nikita-kit/nikita-kickstarter/blob/master/WHY-NOT.md) file. There we might answer some common questions. :)


## License

nikita.kickstarter is licensed under [CC0](http://creativecommons.org/publicdomain/zero/1.0/): Public Domain Dedication, please see
[NIKITA-LICENSE.md](https://github.com/nikita-kit/nikita-kickstarter/blob/master/NIKITA-LICENSE.md) for further information.
