window.onload = function() {

    var canvas_x = [];
    var canvas_y = [];
    var c = [];
    var ctx = [];
    var img = [];

    alert($('canvas').length )
    for (var i = $('canvas').length ; i > 0; i--) {
        c[i] = document.getElementById("myCanvas" + i);
        ctx[i] = c[i].getContext("2d");
        img[i] = document.getElementById(i);
        c[i].style.position = "absolute";
        alert(ctx[i])
    }

    c[1].style.width =  240;
    c[1].style.height = 297;


    c[2].style.width =  240;
    c[2].style.height = 297;


    canvas_x[1]= parseInt("0" , 10) + "px";
    canvas_x[2]= parseInt("0" , 10) + "px";


    canvas_y[1] = parseInt("60", 10) + "px";
    canvas_y[2] = parseInt("357", 10) + "px";


    for (var i = $('canvas').length ; i > 0; i--) {
        c[i].style.left = parseInt(canvas_x[i], 10) + "px";
        c[i].style.top = parseInt(canvas_y[i], 10) + "px";
        alert(c[i].style.left)
        alert(c[i].style.top)
        ctx[i].drawImage(img[i], 0, 0, c[i].style.width, c[i].style.height);
    }


};
