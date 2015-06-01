/**
 * Created by phuongjolly on 5/26/15.
 */

angular.module("todoApp", []).controller("taskList", ["$scope", "$http", function($scope, $http){

    $http.get("/videos/tasks").success(function(data){
       $scope.tasks = data;
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