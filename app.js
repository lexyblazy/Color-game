var squares = document.querySelectorAll('.square');
var h1 = document.querySelector('#header');
var colorDisplay = document.querySelector('span#colorDisplay');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var reset = document.querySelector('#reset');
var numSquares = 6;
var result = document.querySelector('#result');
var colors = [];
generateRandomColors(numSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
 squares[i].style.background = colors[i];
 squares[i].addEventListener('click',function(){
 	var clickedColor = this.style.background;
 	if(clickedColor == pickedColor){
 		result.textContent = 'Correct';
 		changeAllColors(clickedColor);
 		h1.style.background = clickedColor;	
 	}else{
 		result.textContent = 'Try again';
 		this.style.background = '#232323';
 	}	
 })
}
reset.addEventListener('click',resetGame);
easy.addEventListener('click',function(){
	numSquares = 3;
	resetGame();
	for (var i = 0; i < squares.length; i++) {
		if(!colors[i]){
  			squares[i].style.display = 'none';
		}
	}
});
hard.addEventListener('click',function(){
	numSquares = 6;
	resetGame();
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.display = 'block';
		}
});

function pickColor(){
	var rand = Math.floor(Math.random()*colors.length);
	return colors[rand];
}
function changeAllColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
function generateRandomColors(num){
	for (var i = 0; i < num; i++) {
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);	
		var result = "rgb(" + r + ", " + g + ", " + b + ")";
		colors.push(result);
	}

}
function resetGame(){
	colors = [];
	generateRandomColors(numSquares);
	pickedColor = pickColor();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	colorDisplay.textContent = pickedColor;
}