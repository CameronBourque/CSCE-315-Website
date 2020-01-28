//Author: Cameron Bourque
//Date: 1/25/2020
//Description: Code translated from a Java Applet project that I made in highschool

var delay = 0;
var smallestSize = 2;
var done = false;
var width;
var height;
var ctx;

function setupFractal(w, h){
	var canvas = document.getElementById('fractal');
	if(canvas.getContext){
		ctx = canvas.getContext('2d');
		
		width = w;
		height = h;
		
		paint();
	}
}

function setColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	//alert("r: " + r + " g: " + g + " b: " + b);
	ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b +')';
}

function paint(){	
	if(!done)
	{
		//set seed (whenever this gets implemented)
		done = true;
	}
	
	setColor();
	
	setTimeout(delay);
	ctx.fillRect(width / 3, height / 3, width / 3, height / 3);
	
	drawRectTL(width / 3, height / 3, width / 3, height / 3);
	drawRectBL(width / 3, height / 3, width / 3, height / 3);
	drawRectBR(width / 3, height / 3, width / 3, height / 3);
	drawRectTR(width / 3, height / 3, width / 3, height / 3);
}

function drawRectTL(x, y, xSize, ySize){
	if(xSize >= smallestSize && ySize >= smallestSize)
	{
		setColor();
		
		setTimeout(delay);
		ctx.fillRect(x - xSize/2, y - ySize/2, xSize/2, ySize/2);
		
		drawRectTR(x - xSize/2, y - ySize/2, xSize/2, ySize/2);
		drawRectTL(x - xSize/2, y - ySize/2, xSize/2, ySize/2);
		drawRectBL(x - xSize/2, y - ySize/2, xSize/2, ySize/2);
	}
}

function drawRectBL(x, y, xSize, ySize){
	if(xSize >= smallestSize && ySize >= smallestSize)
	{
		setColor();
		
		setTimeout(delay);
		ctx.fillRect(x - xSize/2, y + ySize, xSize/2, ySize/2);
		
		drawRectTL(x - xSize/2, y + ySize, xSize/2, ySize/2);
		drawRectBL(x - xSize/2, y + ySize, xSize/2, ySize/2);
		drawRectBR(x - xSize/2, y + ySize, xSize/2, ySize/2);
	}	
}

function drawRectBR(x, y, xSize, ySize){
	if(xSize >= smallestSize && ySize >= smallestSize)
	{
		setColor();
		
		setTimeout(delay);
		ctx.fillRect(x + xSize, y + ySize, xSize/2, ySize/2);
		
		drawRectBL(x + xSize, y + ySize, xSize/2, ySize/2);
		drawRectBR(x + xSize, y + ySize, xSize/2, ySize/2);
		drawRectTR(x + xSize, y + ySize, xSize/2, ySize/2);
	}	
}

function drawRectTR(x, y, xSize, ySize){
	if(xSize >= smallestSize && ySize >= smallestSize)
	{
		setColor();
		
		setTimeout(delay);
		ctx.fillRect(x + xSize, y - ySize/2, xSize/2, ySize/2);
		
		drawRectBR(x + xSize, y - ySize/2, xSize/2, ySize/2);
		drawRectTR(x + xSize, y - ySize/2, xSize/2, ySize/2);
		drawRectTL(x + xSize, y - ySize/2, xSize/2, ySize/2);
	}	
}