var githubApp=angular.module('githubApp',[]);

githubApp.controller('githubCtrl',function($scope){
	$scope.name="Github API";
	$scope.credentials="mlabouardy";
});


var config = {headers:  {'mlabouardy:sinworm66125'}};

githubApp.controller('commitsCtrl',function($scope, $http){
	$http.get("https://api.github.com/repos/mlabouardy/AtelierCP/commits", config).success(function(data){
		$scope.commits=data;
	});
});

githubApp.controller('reposCtrl',function($scope, $http){
	$http.get("https://api.github.com/users/mlabouardy/repos").success(function(data){
		$scope.repos=data;
	});
});