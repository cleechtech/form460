

app.controller('FilerNameCtrl', function($scope, $http){
	$scope.allFilers = null;
	$scope.$watch('allFilers');

	$scope.getFiler = function(filer){
		var filerName = filer['*']; // sloppy
		
		console.log('function invoked')
		$scope.allFilers = null;
		// database request for a specific filer
		$http.get('/scheduleE/db/' + filerName).then(function(results){
			$scope.results = results.data;
		}, function(err){
			console.error(err)
			$scope.results = err;
		})
	};

	// get all scheduleE Filer names
	$scope.showFilers = function(){
		d3.csv('/scheduleE/filerNames', function(allFilers){
			$scope.allFilers = allFilers;
			$scope.$apply();
		})
	};

})