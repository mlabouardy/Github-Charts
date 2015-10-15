var githubApp=angular.module('githubApp',[]);

githubApp.controller('githubCtrl',function($scope){
	$scope.repository.name="Github API";
	$scope.repository.credentials="mlabouardy";
});