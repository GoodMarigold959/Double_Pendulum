let background;
let foreground;
let ball0;
let ball1;
let ball2;
let arm1;
let arm2;

let context;
let d2Theta1 = 0;
let d2Theta2 = 0;
let dTheta1 = 0;
let dTheta2 = 0;
let Theta1 = 0 * (Math.PI) / 2;
let Theta2 = 2.3 * (Math.PI) / 2;
let m1 = 10;
let m2 = 10;
let l1 = 150;
let l2 = 150;
let X0 = 350;
let Y0 = 60;
let g = 9.8;
let time = 0.05;
let ball1x;
let ball1y;
let ball2x;
let ball2y;

window.onload = start;

function start() {
    background = document.getElementById("background");
    foreground = document.getElementById("foreground");

    ball0 = document.getElementById("ball0");
    ball1 = document.getElementById("ball1");
    ball2 = document.getElementById("ball2");
    arm1 = document.getElementById("arm1");
    arm2 = document.getElementById("arm2");

    init();
}

function init() {
    resize();
    window.onresize = resize;
     
    ball0.setAttribute("cx", X0);
    ball0.setAttribute("cy", Y0);
    arm1.setAttribute("x1", X0);
    arm1.setAttribute("y1", Y0);

    context = background.getContext("2d");
    context.beginPath();
    context.strokeStyle = "blue";

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
}

function draw() {
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
    context.rect(ball2x, ball2y, 1, 1);
    context.stroke();
}

function animate(myCircle1, myCircle2, myLine1, myLine2, canvas, context) {
    mu = 1 + m1 / m2;
    d2Theta1 = (g * (Math.sin(Theta2) * Math.cos(Theta1 - Theta2) - mu * Math.sin(Theta1)) - (l2 * dTheta2 * dTheta2 + l1 * dTheta1 * dTheta1 * Math.cos(Theta1 - Theta2)) * Math.sin(Theta1 - Theta2)) / (l1 * (mu - Math.cos(Theta1 - Theta2) * Math.cos(Theta1 - Theta2)));
    d2Theta2 = (mu * g * (Math.sin(Theta1) * Math.cos(Theta1 - Theta2) - Math.sin(Theta2)) + (mu * l1 * dTheta1 * dTheta1 + l2 * dTheta2 * dTheta2 * Math.cos(Theta1 - Theta2)) * Math.sin(Theta1 - Theta2)) / (l2 * (mu - Math.cos(Theta1 - Theta2) * Math.cos(Theta1 - Theta2)));
    dTheta1 += d2Theta1 * time;
    dTheta2 += d2Theta2 * time;
    Theta1 += dTheta1 * time;
    Theta2 += dTheta2 * time;

    ball1x = X0 + l1 * Math.sin(Theta1);
    ball1y = Y0 + l1 * Math.cos(Theta1);
    ball2x = X0 + l1 * Math.sin(Theta1) + l2 * Math.sin(Theta2);
    ball2y = Y0 + l1 * Math.cos(Theta1) + l2 * Math.cos(Theta2);

    draw();
}
