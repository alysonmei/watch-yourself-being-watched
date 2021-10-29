var capture;
var archive = [];
var ready = false;
// var counter = 0;

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	capture = createCapture(VIDEO, uReady);
	capture.hide();
	setInterval(remember, 500)
}

function uReady(){
	ready = true;
}

function remember(){
	archive.push(capture.get())
}

function draw(){
	background(255)
	if(ready == true){
		var w = 120;
		var h = 75;
		var x = 0;
		var y = 0;

		for (var i = 0; i < archive.length; i++){
			image(archive[i], x, y, w, h);
			x = x + w;
			if (x >= width){
				x = 0;
				y = y + h;
			}
		}
		// archive[counter] = capture.get()
		// counter++;
		// if (counter == 8){
		// 	counter = 0;
		// }
		// remember();
	}
}

// function remember(){
	
	// for (var i = 0; i < archive.length; i++){
	// 	var index = (i * frameCount) % archive.length;
	// 	image(archive[index], x, y, w, h)
	// 	x = x + w;
	// 	if (x >= width){
	// 		x = 0;
	// 		y = y + h;
	// 	}
	// }
// }