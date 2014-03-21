
 var login = angular.module("login", ["ui.router"])
 .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
     
     $urlRouterProvider.otherwise("/home");
     
     $stateProvider
     
     .state("home", {
         url: "/home",
         templateUrl: "se/fidde/login/view/template/login.html",
         controller: "loginController"
     
     })
     
     .state("todo", {
         url: "/todo",
         templateUrl: "se/fidde/login/view/template/todo.html",
         controller: "todoController"
     });
 }]);