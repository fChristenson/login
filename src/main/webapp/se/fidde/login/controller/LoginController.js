login.controller("loginController",["$scope", "loginService", "$location", function($scope, loginService, $location){

    
    $scope.login = function() {
        var isValid = loginService.login($scope.username, $scope.password);
        
        if(isValid){
            $scope.error = false;
            $location.path("/todo");
            
        }else{
            $scope.error = true;
        }
    };
}]);