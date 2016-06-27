(function(){
	'use strict'

	angular.module('home')
	.component('home', {
		templateUrl: 'js/angular-modules/web-ui/content/home/home.html',
		controller: [homeController],
		controllerAs: 'ctrl'
	})

	function homeController() {
		var vm = this
	}
})()