/**
 * Created by phuongjolly on 5/26/15.
 */

var application = angular.module("todoApp", ["ngRoute"]);
application.controller("taskList", ["$scope", "$http", function($scope, $http){

    $http.get("/videos/tasks").success(function(data){
       $scope.tasks = data;

    });


}]);

application.controller("taskData", ["$scope", "$http", function($scope, $http){
    $scope.addButtonClicked = function(){
        $http.post("/videos/tasks", $scope.todoItem).success(function(data){
            $scope.tasks = data;
            $scope.message = "Save successful";
            //console.debug("data is " + data);
            //console.debug("description is " + $scope.todoItem.description);
        });

    }
}]);

application.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/tasks', {
                templateUrl: 'list.html',
                controller: 'taskList'
            }).
            when('/add', {
                templateUrl: 'edit.html',
                controller: 'taskData'
            }).
            otherwise({
                redirectTo: '/tasks'
            });
    }]);

/*angular.module('todoApp', []).controller('taskList', function(){
    var controller = this;

    controller.tasks = [
        {
            id: '1',
            name: 'Go shopping,',
            description: 'buy some new dresses and jeans'
        },
        {
            id: '2',
            name: 'Go to restaurant,',
            description: 'enjoy seafood'
        }

    ];
});*/