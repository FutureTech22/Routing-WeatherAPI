(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

    	$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

		$stateProvider
		.state('home', {
			url: '/',
			views: {
				'content': {
					templateUrl: '../partials/home.html',

				},
			}
			})
		$stateProvider
		.state('products', {
			url: '/products',
			views: {
				'content': {
					templateUrl: '../partials/products.html',
		    },
		}
	})
		$stateProvider
		.state('login', {
			url:'/login',
			views: {
				'content': {
					templateUrl: '../partials/login.html',
				},
			}
		})
		$stateProvider
		.state('shirts', {
			url:'/shirts',
			views: {
				'content': {
				templateUrl: '../partials/products/shirts.html',
				},
			}
		})
		$stateProvider
		.state('hats', {
			url:'/hats',
			views: {
				'content': {
				templateUrl: '../partials/products/hats.html',
				},
			}
		})
		$stateProvider
		.state('shoes', {
			url:'/shoes',
			views: {
				'content': {
				templateUrl: '../partials/products/shoes.html',
				},
			}
		})
		$stateProvider
		.state('captain', {
			url:'/captain',
			views: {
				'content': {
				templateUrl: '../partials/products/hats/captain.html',
				},
			}
		})
		$stateProvider
		.state('indiana', {
			url:'/indiana',
			views: {
				'content': {
				templateUrl: '../partials/products/hats/indiana.html',
				},
			}
		})
		$stateProvider
		.state('feather', {
			url:'/feather',
			views: {
				'content': {
				templateUrl: '../partials/products/hats/feather.html',
				},
			}
		})
		$stateProvider
		.state('hesh', {
			url:'/hesh',
			views: {
				'content': {
				templateUrl: '../partials/products/hats/hesh.html',
				},
			}
		})
		$stateProvider
		.state('bossin', {
			url:'/bossin',
			views: {
				'content': {
				templateUrl: '../partials/products/shoes/bossin.html',
				},
			}
		})
		$stateProvider
		.state('flossin', {
			url:'/flossin',
			views: {
				'content': {
				templateUrl: '../partials/products/shoes/flossin.html',
				},
			}
		})
		$stateProvider
		.state('saucin', {
			url:'/saucin',
			views: {
				'content': {
				templateUrl: '../partials/products/shoes/saucin.html',
				},
			}
		})
		$stateProvider
		.state('slauson', {
			url:'/slauson',
			views: {
				'content': {
				templateUrl: '../partials/products/shoes/slauson.html',
				},
			}
		})
		$stateProvider
		.state('good', {
			url:'/good',
			views: {
				'content': {
				templateUrl: '../partials/products/shirts/good.html',
				},
			}
		})
		$stateProvider
		.state('better', {
			url:'/better',
			views: {
				'content': {
				templateUrl: '../partials/products/shirts/better.html',
				},
			}
		})
		$stateProvider
		.state('best', {
			url:'/best',
			views: {
				'content': {
				templateUrl: '../partials/products/shirts/best.html',
				},
			}
		})
		$stateProvider
		.state('ultra', {
			url:'/ultra',
			views: {
				'content': {
				templateUrl: '../partials/products/shirts/ultra.html',
				},
			}
		})
 });
        
})();