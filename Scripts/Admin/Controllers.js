
var AdminControllers = angular.module("adminControllers", ['factories', 'ngCkeditor', 'ui.bootstrap']);

AdminControllers.controller("VideoListController", ['$scope', 'Video', function($scope, Video) {

        $scope.page = 0;
        $scope.count = 5;

        $scope.getPages = function(numberOfItems) {
            return new Array((numberOfItems | 0)/ $scope.count);
        };

        $scope.selectPage = function(page){
            $scope.page = page;

            $scope.videos = Video.query({
                'page': $scope.page,
                'count': $scope.count
            });
        };

        $scope.deleteVideo = function(videoId) {
            Video.delete({ 'id': videoId }, function(){
                $(".modal").modal("hide");
                $scope.selectPage($scope.page);
            })
        };

        Video.count(function (data){
            $scope.numberOfItems = data.total;
            $scope.pages = new Array(parseInt($scope.numberOfItems / $scope.count) + 1);
        });

        $scope.selectPage(0);


    }]);


AdminControllers.controller("VideoEditController",
    ['$scope', '$location', '$routeParams', 'Video',
    function($scope, $location, $routeParams, Video){
        var id = $routeParams.id;
        $scope.images = [];

        if (id) {
            $scope.video = Video.get({'id': id});
        } else {
            $scope.video = new Video();
        }

        $scope.save = function() {
            this.video.$save();

        };


        $scope.videoPaste = function() {
            $scope.video.link = $scope.video.link.replace(/^.+?v=/g, "");
            $scope.video.link = $scope.video.link.replace(/&.+$/g, "");
            console.log("Video Pasted");
        };

        $scope.editorOptions = {
            toolbar: [
                { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
                { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
                { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
                '/',
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
                { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
                { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
                { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
                { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
                { name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] }
            ],
            height: "150px"
        };
    }]);