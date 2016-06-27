(function(){
	'use strict'

	angular.module('contact')
	.component('contact', {
		templateUrl: 'js/angular-modules/web-ui/content/contact/contact.html',
		controller: [contactController],
		controllerAs: 'ctrl'
	})

	function contactController() {
		var vm = this
	}
})()