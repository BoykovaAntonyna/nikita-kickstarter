# Javascript Setup and Structure

This document explains the usage of javascript in this project.


## Libaries

The project uses the following third party scripts:

1. [require.js](https://github.com/jrburke/requirejs) – for AMD usage
	- for loading text files (frontend templates) [text](https://github.com/requirejs/text)
	- for document ready: [domReady](https://github.com/requirejs/domReady)
2. [radio.js](https://github.com/uxder/Radio) – for using publish/subscribe pattern
3. [modernizr](https://github.com/Modernizr/Modernizr) – for feature detection
4. [hogan.js](https://github.com/twitter/hogan.js) – for client side rendering of Handlebars templates
5. [Swiper.js](https://github.com/nolimits4web/Swiper) – for easy swiping sliders, carousels and galleries


## Setup

### Folder structure

```
/js
	/modules
		/commons (require.js base url)
	/templates (folder for all client side handlebar templates)
	/vendor (third party scripts)
		/plugins (third party scripts plugins)
```

Subfolders can be created at will under consideration of require.js usage. For example for creating a module outside of the ```commons```folder the path configuraion for require.js has to be adjusted.


### Grunt setup

The following grunt tasks are used:

- [includes](https://github.com/vanetix/grunt-includes) – for packing single javascript files into one file
- [jshint](https://github.com/gruntjs/grunt-contrib-jshint) – for hinting javascript sources
- [modernizr](https://github.com/Modernizr/grunt-modernizr) – for creating a custom build of modernizr on runtime
- [uglify](https://github.com/gruntjs/grunt-contrib-uglify) – for minifying and mangle javascript files


#### Using includes

For the reason of not maintaining multiple configurations for require.js and for the sake of flexibility the grunt [task](https://github.com/gruntjs/grunt-contrib-requirejs) for require is not used.

Instead we are using grunt includes to combine javascript files into one file at will.

To include a file into another use:

```
// import path-to-file/_file.js
```

The grunt include task replaces the comment with contents of ```_file.js```. The underscore within the filename shall indicate that this file is included into another. For distributration after the include task has run trough all javascript files a clean up task deletes all javascript files starting with an underscore.

So it is possible to group modules together which are either often used or used in combination by creating one file and adding includes comments. In addition the configuration of require.js needs to be adjusted to tell require.js where to find the module.

An example:

ui.js

```
// import ui/_accordion.js
// import ui/_switcher.js
// import ui/_dropdown.js
```

_requireconfig.js

```
requirejs.config({
	…
	paths: {
		…
		accordion: '../ui',
		switcher: '../ui',
		dropdown: '../ui',
		…
	},
	…
});
```

Because of the possible inclusion of a module it is __required__ that all modules have a specific and unique name within the application:

```
define("switcher", ["radio","helpers"], function(radio,_){ … };
```


### Files

Some files have a special meaning or are required.


#### main.js

This is the main javascript file of the whole page and is include via ```<script />``` into the page.

Note:
Do not use the ```data-src``` logic as suggested by the docs of require.js as the loading modules logic depends on the execution of this file. 


#### _requireconfig.js

The configuration of require.js is placed within this file. It is included by ```main.js```.


#### _app.js

This file defines the global namespace (```PKA```) and the logic of loading modules.
