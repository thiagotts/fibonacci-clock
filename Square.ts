class Square {
	constructor(public xAxis: number, public yAxis: number, public length: number) { }

	public draw(context: CanvasRenderingContext2D): void {
		context.beginPath();
		context.rect(this.xAxis, this.yAxis, this.length, this.length);
		context.fillStyle = 'grey';
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = 'black';
		context.stroke();
	}
}