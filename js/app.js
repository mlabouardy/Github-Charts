var githubApp=angular.module('githubApp',[]);

githubApp.controller('githubCtrl',function($scope){
	$scope.name="Github API";
	$scope.credentials="mlabouardy";
});


githubApp.controller('reposCtrl',function($scope, $http){
	$http.get("https://api.github.com/users/mlabouardy/repos").success(function(data){
		$scope.repos=data;
	});
});