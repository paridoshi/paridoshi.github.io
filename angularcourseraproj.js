var app = angular.module('LunchCheck', []);
app.controller('LunchCheckControlller', function($scope) {

$scope.ans="";
$scope.mFoodItems="";
$scope.checkResult= function(){
  		
  		var res = $scope.mFoodItems.split(",");
  			console.log(res.length);
					if(res.length==1 && res[0]=="" ){
			               $scope.ans= "Please enter data first";
					
					}

				else if(res.length<=3){
			               $scope.ans= "Enjoy!";
					
					}
				else {
					$scope.ans= "Too much!";
					
				     }
		
		
		};

})