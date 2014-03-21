login.factory("loginService",["$location", function($location){
    
    return {
        login: function(username, password){
            if(username === "f" && password === "f")
                return true;
            
            return false;
        },
        logout: function(){
            $location.path("/home");
        }
    };
}]);