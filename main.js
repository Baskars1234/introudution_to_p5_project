function preload() {
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    circle(25, 25, 50);
    rect(30, 20, 600, 20);
    circle(615, 25, 50);
    circle(25, 450, 50);
    rect(30, 450, 600, 20);
    circle(615, 450, 50);
    rect(20, 20, 20, 450);
    rect(610, 20, 20, 450);
}

function take_snapshot(){
    save('student_name.jpg');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}