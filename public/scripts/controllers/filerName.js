

app.controller('FilerNameCtrl', function($scope, $http){
	$scope.searchFiler = function(){
		var filerName = $scope.filerName;
		$http.get('/scheduleE/db/' + filerName).then(function(results){
			$scope.results = results.data;
		}, function(err){
			console.error(err)
			$scope.results = err;
		})
	}
})