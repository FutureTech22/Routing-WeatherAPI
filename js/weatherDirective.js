(function() {
    'use strict';

    angular
        .module('routing')
		.directive('weather', function (API) {

		  return {
		    restrict: 'E', // Restrict to Element only
		    templateUrl: '../partials/weather.html',
    		 link: function (vm, element, attributes){

		      	let character= API.getWeather(attributes.city);

		      	character.then(res=> {
		      		vm.weather = res.data;
		      		console.log(res);
		      	})

		    	}
		    };

		  });
		
})();