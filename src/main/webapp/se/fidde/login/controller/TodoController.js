login.controller("todoController", ["$scope","loginService", function($scope, loginService){
    
    $scope.todos = [{text: "Learn AngularJS", done: false}, {text: "Learn Node.js", done: false}];
    $scope.newTodo = "";
    
    $scope.addTodo = function() {
        if($scope.newTodo === "")
            return;
        
        $scope.todos.push({text: $scope.newTodo, done: false});
        $scope.newTodo = "";
    };
    
    $scope.removeTodo = function() {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
    
    $scope.logout = function() {
        loginService.logout();
    };
}]);