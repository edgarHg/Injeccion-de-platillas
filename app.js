angular.module('App', [])
	.controller('ctrlInyeccionPlantilla', ['$scope', function($scope){
		var OBJ_PLANTILLAS = {
			"plantillaUno": "templates/plantilla-uno.html",
			"plantillaDos": "templates/plantilla-dos.html",
			"plantillaTres": "templates/plantilla-tres.html",
			"plantillaCuatro": "templates/plantilla-cuatro.html"
		};

		$scope.plantillaActiva = OBJ_PLANTILLAS["plantillaUno"];

		$scope.CarmbiarPlantilla = function(tipo){
			$scope.plantillaActiva = OBJ_PLANTILLAS[tipo];			
		};
	}])
