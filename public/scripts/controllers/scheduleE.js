

app.controller('ScheduleECtrl', function($scope, $http){
	$scope.allFilers = null;
	$scope.allPayees = null;
	$scope.$watch('allFilers');

	$scope.getFiler = function(filer){
		var filerName = filer['*']; // sloppy
		$scope.allPayees = null;
		$scope.allFilers = null;
		// database request for a specific filer
		$http.get('/scheduleE/db/' + filerName).then(function(results){
			$scope.results = results.data;
		}, function(err){
			console.error(err)
			$scope.results = err;
		})
	};

	$scope.getPayee = function(payee){
		$scope.allPayees = null;
		$scope.allFilers = null;
		if(payee[0] === " "){
			payee = payee.substr(1);
			console.log(payee)
		}

		console.log(payee)
		$http.get('/scheduleE/payees/' + payee).then(function(result){
			console.log(result)
			$scope.payee = result.data;
		}, function(err){
			console.error(err)
			$scope.payee = err;
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
		$http.get('/scheduleE/payees').then(function(result){
			$scope.allFilers = null;
			$scope.allPayees = result.data;
		})
	};

})