/**
 * require.js config
 */

requirejs.config({
	baseUrl: requireBaseUrl,
	noGlobal: true,
	paths: {
		text: '../../vendor/plugins/text',
		radio: '../../vendor/radio',
		hogan: '../../vendor/hogan',
		swiper: '../../vendor/swiper',
		domReady: '../common',
		tmpl: '../../templates'
	},
	shim: {
		hogan: {
			exports: 'Hogan'
		}
	}
});
