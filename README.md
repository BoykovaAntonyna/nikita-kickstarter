# Project Kickstart Assemble

This is how I start Assemble-Projects as a Frontend-Developer.

Latest Release: [![GitHub version](https://badge.fury.io/gh/rastersysteme%2Fproject-kickstart-assemble.png)](https://github.com/rastersysteme/project-kickstart-assemble/releases)

## My Project-Setup

- [__Grunt__](http://gruntjs.com/) – js task runner
- [__Assemble__](http://assemble.io/) – static site generator
- [__SASS__](http://sass-lang.com/) / [__Compass__](http://compass-style.org/) – css preprocessing
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

compass (1.0.0.alpha.19)
compass-core (1.0.0.alpha.19)
compass-import-once (1.0.3)
sass (3.3.9)
sass-globbing (1.1.1)
scss-lint (0.25.1)
```

For those RubyGems I included a Gemfile, so you can use [__Bundler__](http://bundler.io/) to get a consistent environment. Just type `gem install bundler` to install Bundler itself and then you can use `bundle install` to get the exact Compass and Sass Gems.

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
- [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
- [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)
- [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
- [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
- [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
- [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
- [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint)
- [grunt-newer](https://github.com/tschaub/grunt-newer)
- [grunt-packager](https://github.com/bobbor/grunt-packager)
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

My kickstart-setup provides the three main folders `source/`, `build/` and `dist/`. All source-files will be put to the `source`-folder like templates, fonts, images, js- and sass-files. These files will be processed by several grunt tasks – e.g. compass: sass -> css – and then stored in the `build`-folder. From there you can view the generated html-files in the browser. The `dist`-folder built up like the `build`-folder. The main difference between `build/` and `dist/` is, that `dist/` has combined and minified css/js files, no unnecessary files or code-comments. The `build`-folder is for debugging your files, the `dist-`folder should be used for production.

```
$ tree -d -I node_modules
.
├── build
│   ├── ajax-content
│   ├── css
│   ├── fonts
│   ├── img
│   │   ├── bgs
│   │   ├── icons
│   │   │   └── png-fallback
│   │   └── temp
│   └── js
├── dist
│   ├── ajax-content
│   ├── css
│   ├── fonts
│   ├── img
│   │   ├── bgs
│   │   ├── icons
│   │   │   └── png-fallback
│   │   └── temp
│   └── js
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
    ├── sass
    │   ├── blocks
    │   ├── extends
    │   ├── grunticon
    │   ├── icons
    │   ├── mixins
    │   └── variables
    └── styleguide-template
        └── public
```


## HTML Rules

__HTML5__ is preferred for all HTML documents, so I'm using:

__HTML5 Elements__

sectioning: `<header>, <footer>, <nav>, <aside>, <article>, <section>` …  
grouping: `<main>, <figure>, <figcaption>` …  
text-level semantic: `<mark>, <time>` …  
multimedia: `<video>, <audio>` …

__HTML5 Forms__

types: `date, email, number, range, search, tel, url` …  
elements: `datalist, progress, output` …  
attributes: `pattern, placeholder, required` …

To achieve a constant form-behaviour across all A-graded browsers, I can recommend [Webshims Lib](https://github.com/aFarkas/webshim), a modular capability-based polyfill-loading library.


## HTML Coding Style

(This list is not intended to be exhaustive.)

- __Document Type:__ Use the HTML5 doctype `<!DOCTYPE html>`.
- __Encoding:__: Use UTF-8 `<meta charset="utf-8">`
- __Validity:__ The HTML-code should be valid where possible. You can test it with the [W3C HTML validator](http://validator.w3.org/nu/).
- __Semantics:__ Use HTML according to its purpose. For example, use heading elements `h1–h6` for headings, `p` elements for paragraphs, `a` elements for anchors etc. Tables shouldn't be used for page layout. Also try to avoid DIVitis.
- __Separation of Concerns:__ Separate structure from presentation from behavior.
- __Type Attributes:__ Omit type attributes for style sheets and scripts.
- __General Formatting:__ Use a new line for every block, list, or table element and indent every such child element. I'm using tabs instead of spaces.
- __Quoting:__ When quoting attributes values, use double quotation marks `" "`.
- __Label/Input:__ Every form input should utilize a `label` with a `for`-attribute..
- __Tables:__ Make use of `<thead>, <tfoot>, <tbody>, <th>`.
- __Human readable:__ Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others!


## CSS Rules

I'm using some variation of BEM+SMACSS+optionatedexperienceofcssdevelopmentyears:

My site exists of basic __blocks__. Blocks are independent parts of the site (e.g. menu, metanav, login form, sidebar, user detail page). Like explained at [yandex's BEM](http://img-fotki.yandex.ru/get/5008/221798411.0/0_babce_7deef28f_XXL.png).
The blocks may contain other blocks.

The smallest entities of a block are called __elements__. For instance the block 'menu' contains multiple items, a login block may contain a username element, password element and a submit button element. Like explained at [yandex's BEM](http://img-fotki.yandex.ru/get/6726/221798411.0/0_babd1_f14000fa_XL.png).

Blocks and elements may be modified with __modifiers__. For instance the selected menu item is a modified version of the menu item.

- Blocks
  - are prefixed with _b-_
  - __good:__ b-menu, b-sidebar, b-sitemap, b-user
  - __bad:__ menu, sidebar, sitemap, user
- Elements
  - have _no prefix_ and can only be defined in block scope
  - are not prefixed with their block (choose a longer name if it's not expressive enough)
  - __good:__ item, title, user-avatar (instead of user or avatar)
  - __bad:__ user-user-avatar, menu-item-a
- Modifier
  - are prefixed with _is-_, and have to be defined in block or element scope
  - __good:__ is-selected, is-active, is-approved
  - __bad:__ selected, active, approved


### Example

File `_menu.scss` in `source/sass/blocks` directory.

```
.b-menu { /* block: 'b-menu' */
	&.is-static { /* modifier: 'is-static' for b-menu  */
		…
	}
	
	.item { /* element: 'item' in b-menu */
		a { /* element: 'item a' in b-menu */
			…
		}
	}
}
```


### Class-Naming

Because you want to know if the block is for page layout or for a single component, I separate page layout blocks from component blocks.

Page Layout Blocks:

- b-page
- b-page-header
- b-page-nav
- b-page-main
- b-page-aside
- b-page-footer

Component Blocks:

- b-eventlist
- b-linklist
- b-sitemap
- b-teaser-text
- b-teaser-video
- …


## SASS structure

There are two main SCSS-files `styles.scss` and `universal.scss`.

The `styles.scss` imports all partials. `mixins`, `icons` and `blocks` will be imported with a globbing-pattern. It's important that _every block-component_ gets its own partial and is put into the `blocks`-folder! Use subfolders if your site uses lots of partials.  

The `universal.scss` is a universal fallback stylesheet for older IE browsers mady by [Andy Clarke](http://code.google.com/p/universal-ie6-css/).

This is how the `sass`-folder looks like:

```
.
├── _basics.scss
├── _reset.scss
├── _webfonts.scss
├── blocks
│   ├── _page-aside.scss
│   ├── _page-footer.scss
│   ├── _page-header.scss
│   ├── _page-nav.scss
│   └── …
├── extends
│   ├── _a11y.scss
│   ├── _cf.scss
│   ├── _ellipsis.scss
│   ├── _hide-text.scss
│   ├── _ib.scss
│   ├── …
│   └── ui-components
│       ├── _buttons.scss
│       └── …
├── grunticon
├── icons
│   ├── _icons-data-png.scss
│   ├── _icons-data-svg.scss
│   └── _icons-fallback.scss
├── mixins
│   ├── _grunticon.scss
│   ├── _px-to-rem.scss
│   ├── _respond-to.scss
│   ├── _triangle.scss
│   └── …
├── styles.scss
├── universal.scss
└── variables
    ├── _color.scss
    ├── _typography.scss
    └── …
```

Some explanation:

- __basics.scss__ – basic styles, some normalizing
- __reset.scss__ – global browser reset by [Eric Meyer](http://meyerweb.com/eric/tools/css/reset/)
- __webfonts.scss__ – use it for `@font-face`-declarations
- __blocks/__ – all block-component-partials go in here
- __extends/__ – put your placeholder-extends in here, e.g. `a11y`, `cf`, `hide-text` etc.
- __extends/ui-components__ – put your ui-components in here, e.g. `buttons` etc.
- __grunticon/__ – output by the grunticon-task, files will be processed by the string-replace-task afterwards
- __icons/__ – output by the string-replace-task, you can use the grunticon-mixin to include the `%icons`
- __mixins/__ – put your mixins in here, e.g. `px-to-rem`, `respond-to` etc.
- __styles.scss__ – main stylesheet, includes all partials
- __universal.scss__ – stylesheet for old browsers, based on [universal-ie6-css](https://code.google.com/p/universal-ie6-css/)
- __variables/__ – put your variables in here, e.g. `color`, `typography` etc.


## CSS Coding Style

(This list is not intended to be exhaustive.)

- Use lowercase for class names.
- Be consistant with indentation – I'm using tabs instead of spaces.
- Be consistent in declaration order, cluster related properties (Positioning, Box-Model, Text & Color). I'm no fan of an alphabetical order.
- Be consistant with quotes – I'm using double quotes `""`.
- Quote attribute values in selectors, e.g. `input[type="checkbox"]`.
- One selector per line, one rule per line.
- Put spaces after `:` in property declarations.
- Put spaces before `{` in rule declarations.
- Put a `;` at the end of the last declaration in a declaration block.
- Include a space after each comma in comma-separated property or function values, e.g. `rgba(0, 0, 0, 0)`.
- Separate each ruleset by a blank line.
- Document styles with [KSS](https://github.com/kneath/kss).


## CSS Coding Guidelines

(This list is not intended to be exhaustive.)

- Avoid element selectors.
  - __bad:__ .foo div, .foo span, .foo ul
  - ___good:___ .foo .section, .foo .title, .foo .linklist
- Avoid IDs where possible (exeption: e.g. in forms -> for-attribute).
  - __bad:__ #sidebar
  - __good:__ .sidebar
- Avoid qualifying class names with type selectors.
  - __bad:__ ul.linklist, div.example, a.back 
  - __good:__ .linklist, .example, .back
- Avoid the descendant selector. Target directly if possible.
  - __bad:__ .foo .bar .baz
  - __good:__ .baz-header
- Use shorthand properties where possible.
  - __bad:__ padding-top: 0; padding-right: 1em; padding-bottom: 2em; padding-left: 1em;
  - __good:__ padding: 0 1em 2em;
- Omit unit specification after “0” values.
  - __bad:__ margin: 0px;
  - __good:__ margin: 0;
- Use hexadecimal color codes #000 unless using rgba.
  - __bad:__ color: orange;
  - __good:__ color: #ffa500;
- Use 3 character hexadecimal notation where possible.
  - __bad:__ color: #ff0099;
  - __good:__ color: #f09;
- Use number keywords (100–900) for font-weight.
  - __bad:__ font-weight: normal;
  - __good:__ font-weight: 400;
- Separate words in class names by a hyphen.
  - __bad:__ .user_avatar, .userAvatar, .useravatar
  - __good:__ .user-avatar
- Dont't use !important, it's ok to use it on helper classes though.
- Dont't use conditional stylesheets, use the html-class (e.g. .lt-ie9) instead to style directly in your block.


## SASS Coding Guidelines

(This list is not intended to be exhaustive.)

I'm using SCSS-syntax because it's valid CSS and more expressive in my eyes.

__List @extend first__

```
.b-foo {
	@extend %module; 
	…
}
```

__List regular styles next__

```
.b-foo {
	@extend %module; 
	margin: 0 auto;
	…
}
```

__List @include depending on the property you are referencing__

```
.b-foo {
	@extend %module; 
	margin: 0 auto;
	@include rem(padding, 10px);
	color: #000;
}
```

__List nested selectors last__

```
.b-foo {
	@extend %module;
	margin: 0 auto;
	@include rem(padding, 10px);
	color: #000;
	
	> .bar {
		padding: 0 10px 5px;
	}
}
```

__Maximum Nesting: three levels deep__

```
.b-foo {
	.bar {
		.baz {
			// no more!
		}
	}
}
```


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

If you're asking yourself »Why not …?« have a look at my [WHYNOT.md](https://github.com/rastersysteme/project-kickstart-assemble/blob/master/WHY-NOT.md) file. There I might answer some common questions. :)


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


## TODO

- include JS, perhaps with bower
- give _dist_ some love
- give styleguide-template some default styling
- define comment style `/** */` vs. `/* */` and `//`