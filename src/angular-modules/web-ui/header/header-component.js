(function(){
	'use strict'

	angular.module('header')
	.component('headerComponent', {
		templateUrl: 'js/angular-modules/web-ui/header/header.html',
		controller: [headerController],
		controllerAs: 'ctrl'
	})

	function headerController() {
		var vm = this
	}
})()