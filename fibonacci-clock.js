function drawClock() {

	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	var sizeFactor = 0.15;
	var unitSize = width < height ? (width * sizeFactor) : (height * sizeFactor);

	var canvas = document.getElementById('myCanvas');
	canvas.width = unitSize * 8;
	canvas.height = unitSize * 5;
	canvas.style.marginTop = ((height - (unitSize * 5)) / 2) + "px";
	canvas.style.marginLeft = ((width - (unitSize * 8)) / 2) + "px";


	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.beginPath();
	context.rect(unitSize * 2, 0, unitSize, unitSize);
	context.fillStyle = 'yellow';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = 'black';
	context.stroke();

	context.beginPath();
	context.rect(unitSize * 2, unitSize, unitSize, unitSize);
	context.fillStyle = 'red';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = 'black';
	context.stroke();

	context.beginPath();
	context.rect(0, 0, unitSize * 2, unitSize * 2);
	context.fillStyle = 'blue';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = 'black';
	context.stroke();

	context.beginPath();
	context.rect(0, unitSize * 2, unitSize * 3, unitSize * 3);
	context.fillStyle = 'green';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = 'black';
	context.stroke();

	context.beginPath();
	context.rect(unitSize * 3, 0, unitSize * 5, unitSize * 5);
	context.fillStyle = 'grey';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = 'black';
	context.stroke();
}