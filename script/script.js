var x = angular.module("x", [])

x.controller("Principal", function($scope){
	$scope.Datos = function(Nombre){
		swal("Bienvenido", "Se guardo correctamente", "success");
		swal("Tus datos", Usuario.Nombre+ " " +Usuario.Edad)
	}
 })

