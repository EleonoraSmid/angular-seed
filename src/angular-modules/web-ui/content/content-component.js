(function(){
	'use strict'

	angular.module('content')
	.component('contentComponent', {
		templateUrl: 'js/angular-modules/web-ui/content/content.html',
		controller: [ContentController],
		controllerAs: 'ctrl'
	})

	function ContentController() {
		var vm = this
	}
})()