

var services = angular.module('factories', ['ngResource']);

// tour services
services.factory('Video', ['$resource',
    function ($resource) {
        return $resource('http://localhost/videos/videos/:id/:data', {}, {
            'query':  { method: 'GET', params: { id: ''}, isArray: true},
            'save':   { method: 'POST'},
            'count': {
                method: 'GET',
                params: {data: 'count'},
                isArray: false
            }
        });
    }
]);