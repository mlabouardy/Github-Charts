var githubApp=angular.module('githubApp',[]);

githubApp.controller('githubCtrl',function($scope){
	$scope.name="Github API";
	$scope.credentials="mlabouardy";
});


githubApp.controller('commitsCtrl',function($scope, $http){
	/*var config = {headers:  {Authorization:'mlabouardy:sinworm66125'}};
	$http.get("https://api.github.com/repos/mlabouardy/AtelierCP/commits", config).success(function(data){
		$scope.commits=data;
	});*/
	

	var github = new Github({
	    username: "mlabouardy",
	    password:    "sinworm66125",
	    auth:     "basic"
	  });
	  var user = github.getUser();
	  
	  user.repos(function(err, repos) {
		  $scope.commits=repos;
		  console.log("ok"+repos);
	  });
});

githubApp.controller('reposCtrl',function($scope, $http){
	$http.get("https://api.github.com/users/mlabouardy/repos").success(function(data){
		$scope.repos=data;
	});
});
