/*global $, jQuery, alert*/


$(document).ready(function () {
    "use strict";
    var i = 0;
    
    var counter = function (population) {
        for (i = 0; i < population; i += 1) {
            $("#population div p").empty();
            $("#population div p").append(i);
        }
    };
    
    var delaycounter = function (count_to, ms) {
        for (i = 0; i < count_to; i += 1) {
            setTimeout(counter(i), 500);
        }
    };
    
    delaycounter(1000, 700);
    
/*    $("#population").append("<p>5000</p>");  */
    
});

