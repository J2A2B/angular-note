var app = angular.module('note', []);
var noteStatu= 0;

app.controller('myCtrl', function($scope) {

$scope.press = function(){
	var text = $scope.text;
	if (text.length >= 90) {
	$scope.style= "alert alert-danger";	
	} else if (text.length <90){
	$scope.style= "alert alert-warning";
	}
}

$scope.style= "alert alert-warning";
$scope.affichage = "En cours de modification";



$scope.register = function(){
var MessageNote = $scope.text;
$scope.affichage = "Message enregistré";
$scope.style= "alert alert-success";

};

$scope.delete = function(){
$scope.text = "";
};



});