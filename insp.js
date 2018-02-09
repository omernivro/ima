window.onload = function() {

    var canvas_x = [];
    var canvas_y = [];
    var c = [];
    var ctx = [];
    var img = [];

    alert(canvas_x);

    for (var i = $('canvas').length - 1; i > 0; i--) {
        c[i] = document.getElementById("myCanvas" + i);
        ctx[i] = c[i].getContext("2d");
        img[i] = document.getElementById(i);
        // c[i].style.position = "absolute";
        alert(c[i]);



    }

    c[1].style.width =  parseInt("240px", 10)+ "px";
    c[1].style.height = parseInt("297px", 10)+ "px";
    c[2].style.width =  parseInt("240px", 10)+ "px";
    c[2].style.height = parseInt("297px", 10)+ "px";

    c[3].style.width =  parseInt("500px", 10)+ "px";
    c[3].style.height = parseInt("594px", 10)+ "px";
    c[4].style.width =  parseInt("240px", 10)+ "px";
    c[4].style.height = parseInt("594px", 10)+ "px";


    canvas_x[1]= parseInt("0px" , 10) + "px";
    canvas_x[2]= parseInt("0px" , 10) + "px";
    canvas_x[3]= parseInt("240px" 10) + "px";
    canvas_x[4]= parseInt("740px" , 10) + "px";


    canvas_y[1] = parseInt("60px", 10) + "px";
    canvas_y[2] = parseInt("357px", 10) + "px";
    canvas_y[3] = parseInt("60px", 10) + "px";
    canvas_y[4] = parseInt("60px", 10) + "px";


    for (var i = $('canvas').length - 1; i > 0; i--) {
    // c[i].style.left = parseInt(canvas_x[i], 10) +  "px";
    // c[i].style.top = parseInt(canvas_y[i], 10) +   "px";
        alert (c[i].style.width)
        ctx[i].drawImage(img[i], 0, 0, c[i].style.width, c[i].style.height);
    }



};
