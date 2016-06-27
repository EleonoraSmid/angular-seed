(function(){
	'use strict'

	angular.module('footer')
	.component('footerComponent', {
		templateUrl: 'js/angular-modules/web-ui/footer/footer.html',
		controller: [footerController],
		controllerAs: 'ctrl'
	})

	function footerController() {
		var vm = this
	}
})()