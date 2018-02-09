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
    }





    c[1].style.width =  240;
    c[1].style.height = 300;


    c[2].style.width =  240;
    c[2].style.height = 300;


    c[3].style.width =  900;
    c[3].style.height = 600;

    c[4].style.width =  240;
    c[4].style.height = 600;


    c[5].style.width =  240;
    c[5].style.height = 600;


    c[6].style.width =  900;
    c[6].style.height = 600;


    c[7].style.width =  240;
    c[7].style.height = 300;

    c[8].style.width =  240;
    c[8].style.height = 300;


    c[9].style.width =  350;
    c[9].style.height = 400;


    c[10].style.width =  350;
    c[10].style.height = 400;


    c[11].style.width =  350;
    c[11].style.height = 400;


    c[12].style.width =  350;
    c[12].style.height = 400;


    c[13].style.width =  500;
    c[13].style.height = 530;


    c[14].style.width =  500;
    c[14].style.height = 530;


    c[15].style.width =  500;
    c[15].style.height = 530;

    c[16].style.width =  530;
    c[16].style.height = 1600;


    c[17].style.width =  500;
    c[17].style.height = 900;


    c[18].style.width =  880;
    c[18].style.height = 300;


    c[19].style.width =  880;
    c[19].style.height = 300;

    c[20].style.width =  880;
    c[20].style.height = 300;


    c[21].style.width =  1380;
    c[21].style.height = 400;

    c[22].style.width =  600;
    c[22].style.height = 400;


    c[23].style.width =  780;
    c[23].style.height = 400;




    canvas_x[1]= parseInt("0" , 10) + "px";
    canvas_x[2]= parseInt("0" , 10) + "px";
    canvas_x[3]= parseInt("240" , 10) + "px";
    canvas_x[4]= parseInt("1140" , 10) + "px"; //total width 1380

    canvas_y[1]= parseInt("60", 10) + "px";
    canvas_y[2]= parseInt("360", 10) + "px";
    canvas_y[3]= parseInt("60", 10) + "px";
    canvas_y[4]= parseInt("60", 10) + "px"; // total 660


    canvas_x[5]= parseInt("0" , 10) + "px";
    canvas_x[6]= parseInt("240" , 10) + "px";
    canvas_x[7]= parseInt("1140" , 10) + "px";
    canvas_x[8]= parseInt("1140" , 10) + "px"; //total width 1380


    canvas_y[5]= parseInt("660", 10) + "px";
    canvas_y[6]= parseInt("660", 10) + "px";
    canvas_y[7]= parseInt("660", 10) + "px";
    canvas_y[8]= parseInt("960", 10) + "px"; //accumalate  1260


    canvas_x[9]= parseInt("0" , 10) + "px";
    canvas_x[10]= parseInt("0" , 10) + "px";
    canvas_x[11]= parseInt("0" , 10) + "px";
    canvas_x[12]= parseInt("0" , 10) + "px";
    canvas_x[13]= parseInt("350" , 10) + "px";
    canvas_x[14]= parseInt("350" , 10) + "px";
    canvas_x[15]= parseInt("350" , 10) + "px";
    canvas_x[16]= parseInt("850" , 10) + "px"; //total width 1380


    canvas_y[9]= parseInt("1260", 10) + "px";
    canvas_y[10]= parseInt("1660", 10) + "px";
    canvas_y[11]= parseInt("2060", 10) + "px";
    canvas_y[12]= parseInt("2460", 10) + "px";
    canvas_y[13]= parseInt("1260", 10) + "px";
    canvas_y[14]= parseInt("1790", 10) + "px";
    canvas_y[15]= parseInt("2320", 10) + "px";
    canvas_y[16]= parseInt("1260", 10) + "px"; //accumulate 2860


    canvas_x[17]= parseInt("0" , 10) + "px";
    canvas_x[18]= parseInt("500" , 10) + "px";
    canvas_x[19]= parseInt("500" , 10) + "px";
    canvas_x[20]= parseInt("500" , 10) + "px";

    canvas_y[17]= parseInt("2860", 10) + "px";
    canvas_y[18]= parseInt("2860", 10) + "px";
    canvas_y[19]= parseInt("3160", 10) + "px";
    canvas_y[20]= parseInt("3460", 10) + "px"; //accumulate 3760


    canvas_x[21]= parseInt("0" , 10) + "px";

    canvas_y[21]= parseInt("3760", 10) + "px";


    canvas_x[22]= parseInt("0" , 10) + "px";
    canvas_x[23]= parseInt("600" , 10) + "px";


    canvas_y[22]= parseInt("4160", 10) + "px";
    canvas_y[23]= parseInt("4160", 10) + "px";




    for (var i = $('canvas').length ; i > 0; i--) {
        c[i].style.left = parseInt(canvas_x[i], 10) + "px";
        c[i].style.top = parseInt(canvas_y[i], 10) + "px";
        ctx[i].drawImage(img[i], 0, 0, c[i].style.width, c[i].style.height);
    }


};
