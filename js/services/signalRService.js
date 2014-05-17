
app.service('signalRSvc', ['$','$rootScope', function ($, $rootScope) {
    var proxy = null;

    var initialize = function () {

        console.log('begin of signalRSvc intialize');
        //Getting the connection object
        var connection = $.hubConnection();

        //Creating proxy
        proxy = connection.createHubProxy('testHub');

        //Publishing an event when server pushes a greeting message
        proxy.on('acceptGreet', function (message) {
            console.log('inside acceptGreet');
            console.log(message);
            $rootScope.$broadcast("acceptGreet", message);
        });

        //Starting connection
        connection.start()
                  .done(function () { console.log('Now connected, connection ID=' + connection.id); })
                  .fail(function () { console.log('Could not connect'); });
    };

    var sendRequest = function () {
        //Invoking greetAll method defined in hub
        console.log('in sendRequest');
        proxy.invoke('greetAll');
    };

    return {
        initialize: initialize,
        sendRequest: sendRequest
    };
}]);