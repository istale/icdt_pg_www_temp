
app.controller('CameraCanvasCtrl', ['$', '$scope', '$ionicSideMenuDelegate', function ($, $scope, $ionicSideMenuDelegate) {

    // 關掉滑動出現side menu
    $ionicSideMenuDelegate.canDragContent(false);

    // on DeviceReady check if already logged in (in our case CODE saved)
    ionic.Platform.ready(function () {
        //console.log("ready get camera types");
        if (!navigator.camera) {
            // error handling
            alert('no camera');
            return;
        }
        //pictureSource=navigator.camera.PictureSourceType.PHOTOLIBRARY;
        pictureSource = navigator.camera.PictureSourceType.CAMERA;
        destinationType = navigator.camera.DestinationType.FILE_URI;
    });

    var img = new Image();//DOM圖片元件


    // take picture
    $scope.take_photo = function () {
        //console.log("got camera button click");
        var options = {
            quality: 50,
            destinationType: destinationType,
            sourceType: pictureSource,
            encodingType: 0
        };
        if (!navigator.camera) {
            // error handling
            return;
        }
        navigator.camera.getPicture(
			function (imageURI) {
			    console.log("got camera success ", imageURI);
			    //$scope.mypicture = imageURI;

			    img.src = imageURI;

			    //取得 Canvas物件
			    var ctx = $('camera_canvas').getContext('2d');
			    //繪製拍照出來的相片到Canvas畫布上
			    ctx.drawImage(img, 0, 0, 300, 400);
			},
			function (err) {
			    //console.log("got camera error ", err);
			    // error handling camera plugin
			},
			options);
    };


    $scope.picture = null;
    








}]);