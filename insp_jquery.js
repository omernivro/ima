window.onload = function() {

    split_html_wind_to_rects();

    // alert($('canvas').length - 1)
    // var canvas_x = '0px';
    // var canvas_y = '100px';



    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // var img = document.getElementById("scream");

    // c.style.left = canvas_x;     // x-axis
    // c.style.top = canvas_y;      //y-axis
    // c.style.position = "absolute";
    // c.width = 240;
    // c.height = 297;
    // ctx.drawImage(img, 0, 0, c.width, c.height);

    // var c=document.getElementById("myCanvas2");
    // var ctx=c.getContext("2d");
    // var img=document.getElementById("scream");
    // c.style.left = parseInt(canvas_x, 10) + parseInt("240px", 10) + "px";     // x-axis
    // c.style.top = "100px";      //y-axis
    // c.style.position = "absolute";
    // c.width = 240;
    // c.height = 297;

    // ctx.drawImage(img, 0, 0, c.width, c.height);


};


function split_html_wind_to_rects(){
    var canvas_x = '0px';
    var canvas_y = '0px';

    for (var i = $('canvas').length - 1; i > 0; i--) {

        var c = document.getElementById("myCanvas" + i);
        alert(c.id);
        var ctx = c.getContext("2d");
        var img = document.getElementById(i);

        c.style.left = parseInt(canvas_x, 10) +  "px";
        c.style.top = parseInt(canvas_y, 10) +   "px";

        c.style.position = "absolute";

        c.width = parseInt("240px", 10);
        c.height = parseInt("297px", 10);

        ctx.drawImage(img, 0, 0, c.width, c.height);

        canvas_x = parseInt(canvas_x, 10) + parseInt("240px", 10) + "px";
        canvas_y =  parseInt(canvas_y, 10) + parseInt("297px", 10) + "px";
        // alert(canvas_x);
        // alert(canvas_y);
    }

}