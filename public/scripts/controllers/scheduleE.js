

app.controller('ScheduleECtrl', function($scope, $http){
	$scope.allFilers = null;
	$scope.allPayees = null;
	$scope.$watch('allFilers');

	$scope.getFiler = function(filer){
		var filerName = filer['*']; // sloppy
		
		$scope.allFilers = null;
		// database request for a specific filer
		$http.get('/scheduleE/db/' + filerName).then(function(results){
			$scope.results = results.data;
		}, function(err){
			console.error(err)
			$scope.results = err;
		})
	};

	$scope.showFilers = function(){
		// get all scheduleE Filers
		d3.csv('/scheduleE/filerNames', function(allFilers){
			$scope.allPayees = null;
			$scope.allFilers = allFilers;
			$scope.$apply();
		})
	};

	$scope.showPayees = function(){
		// get all scheduleE Payees
		d3.json('/scheduleE/payees', function(allPayees){
			$scope.allFilers = null;
			$scope.allPayees = allPayees;
			$scope.$apply();
		})
	};

})