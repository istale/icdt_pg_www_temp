
app.directive("drawing", function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            var ctx = element[0].getContext('2d');
            //console.log(element);
            
            var css_width = element[0].offsetWidth;
            var css_height = element[0].offsetHeight;

            element[0].setAttribute('width', css_width);
            element[0].setAttribute('height', css_height - 44);
            //很怪，列印出element[0]中的offsetHeight, clientHeight, scrollHeight 全都是 590，但取到變數中後變590 + 44，看起來是header的高度

            // variable that decides if something should be drawn on mousemove
            var drawing = false;

            // the last coordinates before the current move
            var lastX;
            var lastY;
            var currentX;
            var currentY;


            element.bind('mousedown', function (event) {
                if (event.pageX !== undefined) {
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                } else { // Firefox compatibility
                    //lastX = event.layerX - event.currentTarget.offsetLeft;
                    //lastY = event.layerY - event.currentTarget.offsetTop;
                }

                // begins new line
                ctx.strokeStyle = 'blue';
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);

                drawing = true;
            });
            element.bind('mousemove', function (event) {
                if (drawing) {
                    // get current mouse position
                    if (event.pageX !== undefined) {
                        
                        console.log('mousedown');
                        console.log(event.offsetX + ',' + event.offsetY);


                        currentX = event.offsetX;
                        currentY = event.offsetY;
                    } else {
                        //currentX = event.layerX - event.currentTarget.offsetLeft;
                        //currentY = event.layerY - event.currentTarget.offsetTop;
                    }

                    ctx.lineTo(currentX, currentY);
                    ctx.stroke();

                    //draw(lastX, lastY, currentX, currentY);

                    // set current coordinates to last one
                    //lastX = currentX;
                    //lastY = currentY;
                }

            });
            element.bind('mouseup', function (event) {
                // stop drawing
                drawing = false;
            });

            // canvas reset
            function reset() {
                element[0].width = element[0].width;
            }

            element.bind('touchstart', function (event) {
                var touchEvent = event.originalEvent.changedTouches[0];
                ctx.strokeStyle = 'blue';
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(touchEvent.pageX -4, touchEvent.pageY - 40);
            });

            element.bind('touchmove', function (event) {
                var touchEvent = event.originalEvent.changedTouches[0];
                event.preventDefault();
                ctx.lineTo(touchEvent.pageX -4, touchEvent.pageY -40);
                ctx.stroke();
            });



            function draw(lX, lY, cX, cY) {
                // line from
                ctx.moveTo(lX, lY);
                // to
                ctx.lineTo(cX, cY);
                // color
                ctx.strokeStyle = "#4bf";
                // draw it
                ctx.stroke();
            }
        }
    };
});