// Interpreted from "Pixelator" by Andrew Sink (2020) & "Brightness Mirror" by Dan Shiffman

let capture;
let videoScale;
let ready = false;

function setup() {
	pixelDensity(1);
	frameRate(2);
	createCanvas(window.innerWidth, window.innerHeight);
	capture = createCapture(VIDEO, uReady);
	capture.size(width, height);
	capture.hide();
	noStroke();
}

function uReady(){
	ready = true;
	select('#status').html('Memory, with its constant degeneration, does not equal storage')
}

function draw() {
	background(255);
	if(ready == true){
		forget();
	}
}

function forget(){
	capture.loadPixels();
	loadPixels();
	let videoScale = frameCount;
	console.log(videoScale)

	for(var y = 0; y < capture.height; y++){
	  	for(var x = 0; x < capture.width; x++){
	  		var index = (capture.width - x - 1 + (y * capture.width)) * 4;
	  		var r = capture.pixels[index + 0];
	      	var g = capture.pixels[index + 1];
	      	var b = capture.pixels[index + 2];
	  		fill(r, g, b);
	  		rect(x, y, videoScale, videoScale);
	  		x = x + videoScale - 1;
	  	}
	  	y = y + videoScale - 1;
  	}

}