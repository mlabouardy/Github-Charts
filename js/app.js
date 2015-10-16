var githubApp=angular.module('githubApp',[]);

githubApp.controller('githubCtrl',function($scope){
	$scope.name="Github API";
	$scope.credentials="mlabouardy";
});

githubApp.controller('commitsCtrl',function($scope, $http){
	$http.defaults.headers.common['Authorization'] = 'Basic ' + "mlabouardy" + ':' +"sinworm66125";
	$http.get("https://api.github.com/repos/mlabouardy/AtelierCP/commits").success(function(data){
		$scope.commits=data;
	}).error(function () {
        deferred.reject("Failed to login");
    });
});

githubApp.controller('reposCtrl',function($scope, $http){
	$http.get("https://api.github.com/users/mlabouardy/repos").success(function(data){
		$scope.repos=data;
	});
});