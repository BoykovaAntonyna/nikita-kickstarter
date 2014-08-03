# nikita.kickstarter

This is our toolbelt how to start a new project from scratch.

Latest Release: [![GitHub version](https://badge.fury.io/gh/nikita-kit%2Fnikita-kickstarter.png)](https://github.com/nikita-kit/nikita-kickstarter/releases)

If you're interested in HTML patterns, code snippets and best practices, try [nikita.html](https://github.com/nikita-kit/nikita-html).
If you want to write efficient and scalable (S)CSS-code for big websites, try [nikita.css](https://github.com/nikita-kit/nikita-css).  


## Our Project-Setup

- [__Grunt__](http://gruntjs.com/) – js task runner
- [__Assemble__](http://assemble.io/) – static site generator
- [__SASS__](http://sass-lang.com/) / [__Compass__](http://compass-style.org/) – css preprocessing
- [__nikita.html__](https://github.com/nikita-kit/nikita-html) – HTML conventions and coding guidelines
- [__nikita.css__](https://github.com/nikita-kit/nikita-css) – (S)CSS conventions and coding guidelines
- [__Livereload__](http://livereload.com/) – browser auto refresh
- [__KSS__](http://warpspire.com/kss/) – living styleguide

Grunt depends on [node.js](http://nodejs.org), Sass and Compass depends on [Ruby](http://www.ruby-lang.org). Some of the [Grunt plugins](#grunt-plugins-used) depend on command line tools to be installed on your (build) system.


## Requirements

These are the minimum requirements for my project setup:  
 
- [__Node.js & Node Package Manager__](http://nodejs.org)
- [__Grunt Command Line Interface__](http://gruntjs.com/getting-started) – `sudo npm install -g grunt-cli`
- [__SASS 3.3__](http://rubygems.org/gems/sass/versions/) – `sudo gem install sass`
- [__SASS Globbing 1.1__](http://rubygems.org/gems/sass-globbing/versions) – `sudo gem install sass-globbing`
- [__SCSS Lint 0.25__](http://rubygems.org/gems/scss-lint/versions) – `sudo gem install scss-lint`
- [__Compass 1__](http://rubygems.org/gems/compass/versions) (atm in ALPHA-state) – `sudo gem install compass --pre`

It's mandatory to use the latest versions of SASS and Compass if you want to work with [__CSS Source Maps__](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) in Google Chrome.

If you're experiencing problems with Compass, it could be related to the fact, that it is in pre-release state. Here's an example of my working configuration:  

```
$ gem list

compass (1.0.0.alpha.21)
compass-core (1.0.0.alpha.21)
compass-import-once (1.0.4)
sass (3.3.10)
sass-globbing (1.1.1)
scss-lint (0.25.1)
```

For those RubyGems we included a Gemfile, so you can use [__Bundler__](http://bundler.io/) to get a consistent environment. Just type `gem install bundler` to install Bundler itself and then you can use `bundle install` to get the exact Gems.

If you want to use the browser-auto-refresh-feature, get [__LiveReload.js__](https://github.com/livereload/livereload-js) and install it to the root-folder of localhost.


## Getting started

Open your preferred command line tool and choose your project directory.  

Either use `./setup-dev-env.sh`. This will start a shell script to check requirements, then runs `npm install` automatically to install Grunt and [Grunt plugins](#grunt-plugins-used) required for the build script.  

Or use `npm install` if your are on Windows (you have to check the requirements manually). This will install Grunt and [Grunt plugins](#grunt-plugins-used) required for the build script.

1. `grunt` or `grunt build` – start build script
2. [http://localhost:9002/](http://localhost:9002/) or [http://0.0.0.0:9002/](http://0.0.0.0:9002/) – watch your build-directory in the browser (livereload is running on port 9002)
3. `grunt dist` – start distribution build script


## Grunt-Devtools

If you dont't like the command line you can use an alternative called [grunt-devtools](https://github.com/vladikoff/grunt-devtools) for the Chrome browser to start the grunt tasks.

1. Download the [Grunt Devtools extension for Chrome Developer Tools](https://chrome.google.com/webstore/detail/grunt-devtools/fbiodiodggnlakggeeckkjccjhhjndnb?hl=en) from the Chrome Web Store.
2. Global install via `npm install -g grunt-devtools`.
3. Run `grunt-devtools` in a directory with a Gruntfile.
4. Open Chrome Devtools and find the __Grunt tab__. Your grunt tasks should now be accessible from within Chrome.


## Grunt-Plugins used

- [assemble](https://github.com/assemble/assemble)
- [connect-livereload](https://github.com/intesso/connect-livereload)
- [grunt](https://github.com/gruntjs/grunt)
- [grunt-accessibility](https://github.com/yargalot/grunt-accessibility)
- [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
- [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
- [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
- [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-csssplit](https://github.com/project-collins/grunt-csssplit)
- [grunt-group-css-media-queries](https://github.com/Se7enSky/grunt-group-css-media-queries)
- [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint)
- [grunt-includes](https://github.com/vanetix/grunt-includes)
- [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc)
- [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr)
- [grunt-newer](https://github.com/tschaub/grunt-newer)
- [grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas)
- [grunt-photobox](https://github.com/stefanjudis/grunt-photobox)
- [grunt-prettify](https://github.com/jonschlinkert/grunt-prettify)
- [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
- [grunt-string-replace](https://github.com/erickrdch/grunt-string-replace)
- [grunt-styleguide](https://github.com/indieisaconcept/grunt-styleguide)
- [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin)
- [grunt-sync](https://github.com/tomusdrw/grunt-sync)
- [grunticon](https://github.com/filamentgroup/grunticon)
- [time-grunt](https://github.com/sindresorhus/time-grunt)


## Grunt-Notifications

You don't like to stare permanently on your console? So wouldn’t it be great if your system could notify you when your fresh build is ready to consume or when anything bad happened? Meet [grunt-notify](https://github.com/dylang/grunt-notify), an automatic desktop notification service for Grunt using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center and Notify-Send. Just install this plugin via npm and load it in your Gruntfile.


## Project structure

My kickstart-setup provides the three main folders `source/`, `build/` and `dist/`. All source-files will be put to the `source`-folder like templates, fonts, images, js- and sass-files. These files will be processed by several grunt tasks – e.g. compass: sass -> css – and then stored in the `build`-folder. From there you can view the generated html-files in the browser. The `dist`-folder is built up like the `build`-folder. The main difference between `build/` and `dist/` is, that `dist/` has combined and minified css/js files, no unnecessary files or code-comments. The `build`-folder is for debugging your files, the `dist-`folder should be used for production.

```
$ tree -d -I node_modules
.
├── build
│   ├── ajax-content
│   ├── css
│   ├── fonts
│   ├── img
│   │   ├── bgs
│   │   └── icons
│   │       └── png-fallback
│   └── js
│       ├── modules
│       ├── templates
│       └── vendor
│           └── plugins
├── dist
│   ├── ajax-content
│   ├── css
│   ├── fonts
│   ├── img
│   │   ├── bgs
│   │   └── icons
│   │       └── png-fallback
│   └── js
│       ├── modules
│       ├── templates
│       └── vendor
│           └── plugins
└── source
    ├── ajax-content
    ├── assemble
    │   ├── data
    │   ├── helpers
    │   ├── layouts
    │   ├── pages
    │   └── partials
    ├── fonts
    ├── img
    │   ├── bgs
    │   ├── dev
    │   ├── icons
    │   │   ├── png-fallback
    │   │   └── svgmin
    │   └── temp
    ├── js
    │   ├── modules
    │   ├── templates
    │   └── vendor
    │       └── plugins
    ├── sass
    │   ├── blocks
    │   ├── extends
    │   │   └── ui-components
    │   ├── grunticon
    │   ├── icons
    │   ├── mixins
    │   └── variables
    └── styleguide-template
        └── public
```


## HTML

For the HTML structure, please have a look at [nikita.html](https://github.com/nikita-kit/nikita-html). This sub project
describes the HTML coding standards and conventions.


## CSS

For the CSS structure, please have a look at [nikita.css](https://github.com/nikita-kit/nikita-css). This sub project
describes the CSS coding standards and conventions.


## Javascript

For the Javascript setup and structure have a look at the [README.md](https://github.com/nikita-kit/nikita-kickstarter/blob/master/source/js/README.md) laying in `source/js`.


## Icon-Workflow

1. Just put your SVG-Icons into `source/icons`.
2. All icons will be processed with the svgmin-task and put into the `svgmin-folder.
3. Afterwards the grunticon-task uses these icons to produce
    1. PNG-fallback-files, which will be put into the `png-fallback`-folder
    2. SCSS-files (all icons are included as data-URIs), which will be put into `sass/grunticon`.
4. These SCSS-files will now be processed by the string-replace-task to get different placeholder-extends. They are saved into `sass/icons`.
5. Now you can include your icons by using the `_grunticon.scss`-mixin. Just type `@include grunticon(name-of-your-icon);`.

__Attention:__ Grunticon also produces icons as png-data-uris, mainly for ie8 and older android browsers. If you use lots of icons in your project, remove `@extend %icon-data-png-#{$name};` from the mixin and only extend the svg and fallback version. Otherwise it could really hurt performance because of CSS-bloat!


## Questions?

If you're asking yourself »Why not …?« have a look at my [WHYNOT.md](https://github.com/nikita-kit/nikita-kickstarter/blob/master/WHY-NOT.md) file. There we might answer some common questions. :)


## License

nikita.kickstarter is licensed under [CC0](http://creativecommons.org/publicdomain/zero/1.0/): Public Domain Dedication, please see
[NIKITA-LICENSE.md](https://github.com/nikita-kit/nikita-kickstarter/blob/master/NIKITA-LICENSE.md) for further information.
