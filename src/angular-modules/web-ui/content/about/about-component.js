(function(){
	'use strict'

	angular.module('about')
	.component('about', {
		templateUrl: 'js/angular-modules/web-ui/content/about/about.html',
		controller: [aboutController],
		controllerAs: 'ctrl'
	})

	function aboutController() {
		var vm = this
	}
})()