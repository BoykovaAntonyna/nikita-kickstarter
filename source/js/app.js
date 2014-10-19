define('app', ['logging'], function(logging)
{
	var App = function()
	{
		logging.applyLogging(this, 'App');

		this.initializeEventListeners();
	};

	App.prototype.initializeEventListeners = function()
	{

	};

	return new App();
});