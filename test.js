 var detectSpeed = require("detect-speed");

 //Callback to receive timing information
 var callback = function(timings) {
     if (timings.data) {
         console.log(timings);
     }
 }

 detectSpeed.startSpeedCheck("http://ashanbh.github.io/images/coffee-apple-iphone-laptop.jpg", callback);
