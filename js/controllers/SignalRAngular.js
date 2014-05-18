

app.controller('SignalRAngularCtrl', ['$scope', 'signalRSvc', '$rootScope', 'PushProcessingService', function ($scope, signalRSvc, $rootScope, PushProcessingService) {

    console.log('begin of SignalRAngularCtrl');

    $scope.text = '';
    $scope.check = '';

    $scope.greetAll = function () {
        console.log('btn clicked');
        $scope.check = 'btn clicked';
        signalRSvc.sendRequest();
    }

    updateGreetingMessage = function (text) {
        $scope.text = text;
    }

    console.log('befor signalR initialze');
    signalRSvc.initialize();

    //Updating greeting message after receiving a message through the event

    $scope.$parent.$on("acceptGreet", function (e, message) {
        console.log('in on acceptGreet');
        $scope.$apply(function () {
            console.log('in on acceptGreet apply');
            updateGreetingMessage(message);
        });
    });


    $scope.test_alert = function () {
        alert('alert');
    }

    $scope.push_init = function () {
        PushProcessingService.manual_initialize();
    }

}]);