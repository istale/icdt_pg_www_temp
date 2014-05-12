
/*http://codepen.io/ionic/pen/AjgEB*/

app.controller('SlidesCtrl', ['$scope', '$state', '$$ionicSlideBoxDelegate', function ($scope, $state, $ionicSlideBoxDelegate) {

    $scope.next = function () {
        $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function () {
        $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
        $scope.slideIndex = index;
    };
}]);


