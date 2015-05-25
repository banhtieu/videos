
var controllers = angular.module("controllers", ['factories', 'ngCkeditor', 'ui.bootstrap']);


controllers.controller("SliderController", ['$scope', 'Video', function($scope, Video) {
    $scope.videos = Video.query();
}]);