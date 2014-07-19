/**
 * Global Namespace
 * 
 */

var PKA = PKA || {};


/**
 * Array of Module instances
 * 
 */

PKA.loadedModules = [];


/**
 * Moduleloader
 *
 * @param {String} name of the module 
 * @param {String} context of the module as css selector string - optional
 * @param {Object} options for the module - optional
 *
 */

PKA.loadModule = function ( moduleName ) {
	var element, lastEl, scripts, Mod;
	
	var that = this,
		args = Array.prototype.slice.call(arguments, 0),
		len = args.length,
		options = typeof args[len - 1] === 'object' ? args[len - 1] : null, // last argument are the options
		moduleContext = len >= 2 && typeof args[1] === 'string' ? args[1] : null,
		
	nodeBefore = function ( sibling ) {
		while ( sibling = sibling.previousSibling ) {
			if ( sibling.nodeType !== 8 && sibling.nodeType !== 3 ) {
				return sibling;
			}
		}
		return null;
	};
	
	if ( moduleContext ) {
		element = document.querySelector(moduleContext);
	} else {
		scripts = document.body.lastChild.querySelectorAll('script');
		lastEl = scripts[ scripts.length - 1 ];
		element = nodeBefore(lastEl);
	}
	
	if(!element) {
		console.warn('Cannot find context for module ' + moduleName + '!');
		return false;
	}
	
	require([moduleName], function(Module){
		if(Module) {
			Mod = new Module(element,options);
			if ( Mod.init && typeof Mod.init === 'function' ) {
				Mod.init();
			}
			that.loadedModules.push(Mod);
		}
	});
};


/**
 * loading common modules
 * 
 */

