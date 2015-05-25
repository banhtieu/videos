/**
 * Created by banht_000 on 5/19/2015.
 */

var adminApplication = angular.module("AdminApplication", ["ngRoute", "adminControllers", "flow", "youtube-embed"]);

adminApplication.controller("MainController", function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

});

adminApplication.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/videos', {
            templateUrl: 'Videos/list.html',
            controller: 'VideoListController'
        })
        .when('/videos/add', {
            templateUrl: 'Videos/edit.html',
            controller: 'VideoEditController'
        })
        .when('/videos/edit/:id', {
            templateUrl: 'Videos/edit.html',
            controller: 'VideoEditController'
        })
        .otherwise({
            redirectTo: '/videos'
        });
}]);

// config flow
adminApplication.config(['flowFactoryProvider', function (flowFactoryProvider) {
    flowFactoryProvider.defaults = {
        target: '/upload',
        permanentErrors:[404, 500, 501]
    };
}]);


+function($) {
    $(function(){
        // class
        $(document).on('click', '[data-toggle^="class"]', function(e){
            e && e.preventDefault();
            console.log('abc');
            var $this = $(e.target), $class , $target, $tmp, $classes, $targets;
            !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
            $class = $this.data()['toggle'];
            $target = $this.data('target') || $this.attr('href');
            $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
            $target && ($targets = $target.split(','));
            $classes && $classes.length && $.each($targets, function( index ) {
                if ( $classes[index].indexOf( '*' ) !== -1 ) {
                    var patt = new RegExp( '\\s' +
                        $classes[index].
                            replace( /\*/g, '[A-Za-z0-9-_]+' ).
                            split( ' ' ).
                            join( '\\s|\\s' ) +
                        '\\s', 'g' );
                    $($this).each( function ( i, it ) {
                        var cn = ' ' + it.className + ' ';
                        while ( patt.test( cn ) ) {
                            cn = cn.replace( patt, ' ' );
                        }
                        it.className = $.trim( cn );
                    });
                }
                ($targets[index] !='#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
            });
            $this.toggleClass('active');
        });

        // collapse nav
        $(document).on('click', 'nav a', function (e) {
            var $this = $(e.target), $active;
            $this.is('a') || ($this = $this.closest('a'));

            $active = $this.parent().siblings( ".active" );
            $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);

            ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
            $this.parent().toggleClass('active');

            $this.next().is('ul') && e.preventDefault();

            setTimeout(function(){ $(document).trigger('updateNav'); }, 300);
        });
    });
}(jQuery);