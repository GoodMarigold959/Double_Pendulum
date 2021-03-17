let background;
let context;
let startbutton;
let drawbutton;

let yp1;
let yp2;
let rp1;
let rp2;
let bp1;
let bp2;

let foreground;
let ball0;
let ball1;
let ball2;
let arm1;
let arm2;

let X0 = 500;
let Y0 = 350;
let g = 9.8;
let time = 0.05;

let d2Theta1 = 0 * (Math.PI) / 180;
let d2Theta2 = 0 * (Math.PI) / 180;
let dTheta1 = 0 * (Math.PI) / 180;
let dTheta2 = 1.000002 * (Math.PI) / 180;
let Theta1 = 90 * (Math.PI) / 180;
let Theta2 = 270 * (Math.PI) / 180;
let m1 = 10;
let m2 = 10;
let l1 = 150;
let l2 = 150;
let ball1x;
let ball1y;
let ball2x;
let ball2y;

let foreground_2;
let ball0_2;
let ball1_2;
let ball2_2;
let arm1_2;
let arm2_2;

let d2Theta1_2 = 0 * (Math.PI) / 180;
let d2Theta2_2 = 0 * (Math.PI) / 180;
let dTheta1_2 = 0 * (Math.PI) / 180;
let dTheta2_2 = 1.000001 * (Math.PI) / 180;
let Theta1_2 = 90 * (Math.PI) / 180;
let Theta2_2 = 270 * (Math.PI) / 180;
let m1_2 = 10;
let m2_2 = 10;
let l1_2 = 150;
let l2_2 = 150;
let ball1x_2;
let ball1y_2;
let ball2x_2;
let ball2y_2;

let foreground_3;
let ball0_3;
let ball1_3;
let ball2_3;
let arm1_3;
let arm2_3;

let d2Theta1_3 = 0 * (Math.PI) / 180;
let d2Theta2_3 = 0 * (Math.PI) / 180;
let dTheta1_3 = 0 * (Math.PI) / 180;
let dTheta2_3 = 1 * (Math.PI) / 180;
let Theta1_3 = 90 * (Math.PI) / 180;
let Theta2_3 = 270 * (Math.PI) / 180;
let m1_3 = 10;
let m2_3 = 10;
let l1_3 = 150;
let l2_3 = 150;
let ball1x_3;
let ball1y_3;
let ball2x_3;
let ball2y_3;

window.onload = start;

function start() {
    background = document.getElementById("background");
    foreground = document.getElementById("foreground");

    ball0 = document.getElementById("ball0");
    ball1 = document.getElementById("ball1");
    ball2 = document.getElementById("ball2");
    arm1 = document.getElementById("arm1");
    arm2 = document.getElementById("arm2");

    foreground_2 = document.getElementById("foreground2");

    ball0_2 = document.getElementById("ball02");
    ball1_2 = document.getElementById("ball12");
    ball2_2 = document.getElementById("ball22");
    arm1_2 = document.getElementById("arm12");
    arm2_2 = document.getElementById("arm22");

    foreground_3 = document.getElementById("foreground3");

    ball0_3 = document.getElementById("ball03");
    ball1_3 = document.getElementById("ball13");
    ball2_3 = document.getElementById("ball23");
    arm1_3 = document.getElementById("arm13");
    arm2_3 = document.getElementById("arm23");

    resize();
    window.onresize = resize;

    ball0.setAttribute("cx", X0);
    ball0.setAttribute("cy", Y0);
    arm1.setAttribute("x1", X0);
    arm1.setAttribute("y1", Y0);

    ball0_2.setAttribute("cx", X0);
    ball0_2.setAttribute("cy", Y0);
    arm1_2.setAttribute("x1", X0);
    arm1_2.setAttribute("y1", Y0);

    ball0_3.setAttribute("cx", X0);
    ball0_3.setAttribute("cy", Y0);
    arm1_3.setAttribute("x1", X0);
    arm1_3.setAttribute("y1", Y0);

    draw();

    //context = background.getContext("2d");
    //context.beginPath();
    //context.strokeStyle = "blue";



    startButton = document.getElementById("start");
    startButton.addEventListener("click", init);
    drawbutton = document.getElementById("draw");
    drawbutton.addEventListener("click", update);

    
}

function update()
{
    if (document.getElementById("Theta1").value != "")
        Theta1 = Number(document.getElementById("Theta1").value) * (Math.PI) / 180;
    if (document.getElementById("Theta2").value != "")
        Theta2 = Number(document.getElementById("Theta2").value) * (Math.PI) / 180;
    if (document.getElementById("dTheta1").value != "")
        dTheta1 = Number(document.getElementById("dTheta1").value) * (Math.PI) / 180;
    if (document.getElementById("dTheta2").value != "")
        dTheta2 = Number(document.getElementById("dTheta2").value) * (Math.PI) / 180;

    if (document.getElementById("Theta1-2").value != "")
        Theta1_2 = Number(document.getElementById("Theta1-2").value) * (Math.PI) / 180;
    if (document.getElementById("Theta2-2").value != "")
        Theta2_2 = Number(document.getElementById("Theta2-2").value) * (Math.PI) / 180;
    if (document.getElementById("dTheta1-2").value != "")
        dTheta1_2 = Number(document.getElementById("dTheta1-2").value) * (Math.PI) / 180;
    if (document.getElementById("dTheta2-2").value != "")
        dTheta2_2 = Number(document.getElementById("dTheta2-2").value) * (Math.PI) / 180;
    
    if (document.getElementById("Theta1-3").value != "")
        Theta1_3 = Number(document.getElementById("Theta1-3").value) * (Math.PI) / 180;
    if (document.getElementById("Theta2-3").value != "")
        Theta2_3 = Number(document.getElementById("Theta2-3").value) * (Math.PI) / 180;
    if (document.getElementById("dTheta1-3").value != "")
        dTheta1_3 = Number(document.getElementById("dTheta1-3").value) * (Math.PI) / 180;
    if (document.getElementById("dTheta2-3").value != "")
        dTheta2_3 = Number(document.getElementById("dTheta2-3").value) * (Math.PI) / 180;

    draw();
}

function init() 
{
    startButton.setAttribute("disabled", true);
    drawbutton.setAttribute("disabled", true);
    update();
    setInterval(function(){
        animate();
    }, 5);
}

function resize() {
    bcr = document.body.getBoundingClientRect();

    background.width = bcr.width;
    background.height = bcr.height;
    foreground.setAttribute("width", bcr.width + "px");
    foreground.setAttribute("height", bcr.height + "px");
    foreground_2.setAttribute("width", bcr.width + "px");
    foreground_2.setAttribute("height", bcr.height + "px");
    foreground_3.setAttribute("width", bcr.width + "px");
    foreground_3.setAttribute("height", bcr.height + "px");
}

function draw() {

    ball1x = X0 + l1 * Math.sin(Theta1);
    ball1y = Y0 + l1 * Math.cos(Theta1);
    ball2x = X0 + l1 * Math.sin(Theta1) + l2 * Math.sin(Theta2);
    ball2y = Y0 + l1 * Math.cos(Theta1) + l2 * Math.cos(Theta2);

    ball1x_2 = X0 + l1_2 * Math.sin(Theta1_2);
    ball1y_2 = Y0 + l1_2 * Math.cos(Theta1_2);
    ball2x_2 = X0 + l1_2 * Math.sin(Theta1_2) + l2 * Math.sin(Theta2_2);
    ball2y_2 = Y0 + l1_2 * Math.cos(Theta1_2) + l2 * Math.cos(Theta2_2);

    ball1x_3 = X0 + l1_3 * Math.sin(Theta1_3);
    ball1y_3 = Y0 + l1_3 * Math.cos(Theta1_3);
    ball2x_3 = X0 + l1_3 * Math.sin(Theta1_3) + l2 * Math.sin(Theta2_3);
    ball2y_3 = Y0 + l1_3 * Math.cos(Theta1_3) + l2 * Math.cos(Theta2_3);

    arm1.setAttribute("x2", ball1x);
    arm1.setAttribute("y2", ball1y);
    arm2.setAttribute("x1", ball1x);
    arm2.setAttribute("y1", ball1y);
    arm2.setAttribute("x2", ball2x);
    arm2.setAttribute("y2", ball2y);
    ball1.setAttribute("cx", ball1x);
    ball1.setAttribute("cy", ball1y);
    ball2.setAttribute("cx", ball2x);
    ball2.setAttribute("cy", ball2y);

    arm1_2.setAttribute("x2", ball1x_2);
    arm1_2.setAttribute("y2", ball1y_2);
    arm2_2.setAttribute("x1", ball1x_2);
    arm2_2.setAttribute("y1", ball1y_2);
    arm2_2.setAttribute("x2", ball2x_2);
    arm2_2.setAttribute("y2", ball2y_2);
    ball1_2.setAttribute("cx", ball1x_2);
    ball1_2.setAttribute("cy", ball1y_2);
    ball2_2.setAttribute("cx", ball2x_2);
    ball2_2.setAttribute("cy", ball2y_2);

    arm1_3.setAttribute("x2", ball1x_3);
    arm1_3.setAttribute("y2", ball1y_3);
    arm2_3.setAttribute("x1", ball1x_3);
    arm2_3.setAttribute("y1", ball1y_3);
    arm2_3.setAttribute("x2", ball2x_3);
    arm2_3.setAttribute("y2", ball2y_3);
    ball1_3.setAttribute("cx", ball1x_3);
    ball1_3.setAttribute("cy", ball1y_3);
    ball2_3.setAttribute("cx", ball2x_3);
    ball2_3.setAttribute("cy", ball2y_3);

    //context.rect(ball2x, ball2y, 1, 1);
    //context.stroke();
}

function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context) {
    mu = 1 + m1 / m2;
    d2Theta1 = (g * (Math.sin(Theta2) * Math.cos(Theta1 - Theta2) - mu * Math.sin(Theta1)) - (l2 * dTheta2 * dTheta2 + l1 * dTheta1 * dTheta1 * Math.cos(Theta1 - Theta2)) * Math.sin(Theta1 - Theta2)) / (l1 * (mu - Math.cos(Theta1 - Theta2) * Math.cos(Theta1 - Theta2)));
    d2Theta2 = (mu * g * (Math.sin(Theta1) * Math.cos(Theta1 - Theta2) - Math.sin(Theta2)) + (mu * l1 * dTheta1 * dTheta1 + l2 * dTheta2 * dTheta2 * Math.cos(Theta1 - Theta2)) * Math.sin(Theta1 - Theta2)) / (l2 * (mu - Math.cos(Theta1 - Theta2) * Math.cos(Theta1 - Theta2)));
    dTheta1 += d2Theta1 * time;
    dTheta2 += d2Theta2 * time;
    Theta1 += dTheta1 * time;
    Theta2 += dTheta2 * time;

    

    mu_2 = 1 + m1_2 / m2_2;
    d2Theta1_2 = (g * (Math.sin(Theta2_2) * Math.cos(Theta1_2 - Theta2_2) - mu_2 * Math.sin(Theta1_2)) - (l2_2 * dTheta2_2 * dTheta2_2 + l1_2 * dTheta1_2 * dTheta1_2 * Math.cos(Theta1_2 - Theta2_2)) * Math.sin(Theta1_2 - Theta2_2)) / (l1_2 * (mu_2 - Math.cos(Theta1_2 - Theta2_2) * Math.cos(Theta1_2 - Theta2_2)));
    d2Theta2_2 = (mu_2 * g * (Math.sin(Theta1_2) * Math.cos(Theta1_2 - Theta2_2) - Math.sin(Theta2_2)) + (mu_2 * l1_2 * dTheta1_2 * dTheta1_2 + l2_2 * dTheta2_2 * dTheta2_2 * Math.cos(Theta1_2 - Theta2_2)) * Math.sin(Theta1_2 - Theta2_2)) / (l2_2 * (mu_2 - Math.cos(Theta1_2 - Theta2_2) * Math.cos(Theta1_2 - Theta2_2)));
    dTheta1_2 += d2Theta1_2 * time;
    dTheta2_2 += d2Theta2_2 * time;
    Theta1_2 += dTheta1_2 * time;
    Theta2_2 += dTheta2_2 * time;

    

    mu_3 = 1 + m1_3 / m2_3;
    d2Theta1_3 = (g * (Math.sin(Theta2_3) * Math.cos(Theta1_3 - Theta2_3) - mu_3 * Math.sin(Theta1_3)) - (l2_3 * dTheta2_3 * dTheta2_3 + l1_3 * dTheta1_3 * dTheta1_3 * Math.cos(Theta1_3 - Theta2_3)) * Math.sin(Theta1_3 - Theta2_3)) / (l1_3 * (mu_3 - Math.cos(Theta1_3 - Theta2_3) * Math.cos(Theta1_3 - Theta2_3)));
    d2Theta2_3 = (mu_3 * g * (Math.sin(Theta1_3) * Math.cos(Theta1_3 - Theta2_3) - Math.sin(Theta2_3)) + (mu_3 * l1_3 * dTheta1_3 * dTheta1_3 + l2_3 * dTheta2_3 * dTheta2_3 * Math.cos(Theta1_3 - Theta2_3)) * Math.sin(Theta1_3 - Theta2_3)) / (l2_3 * (mu_3 - Math.cos(Theta1_3 - Theta2_3) * Math.cos(Theta1_3 - Theta2_3)));
    dTheta1_3 += d2Theta1_3 * time;
    dTheta2_3 += d2Theta2_3 * time;
    Theta1_3 += dTheta1_3 * time;
    Theta2_3 += dTheta2_3 * time;


    draw();
}
