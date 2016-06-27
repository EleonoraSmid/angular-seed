(function(){
	'use strict'

	angular.module('web-ui').component('webMainComponent', {
		templateUrl: 'js/angular-modules/web-ui/web-ui.html',
		controller: [webUiMainController],
		$routeConfig: [
		{path: '/about', name: 'About', component: 'about'},
		{path: '/home', name: 'Home', component: 'home', useAsDefault: true},
		{path: '/contact', name: 'Contact', component: 'contact'}
		]
	})

	function webUiMainController() {
		const vm = this
	}
})()