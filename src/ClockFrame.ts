class ClockFrame {
	private radius: number = 20;

	constructor(public xAxis: number, public yAxis: number, public width: number,
		public height: number) { }

	public draw(context: CanvasRenderingContext2D): void {
		context.beginPath();
		context.moveTo(this.xAxis + this.radius, this.yAxis);
		context.lineTo(this.xAxis + this.width - this.radius, this.yAxis);
		context.quadraticCurveTo(this.xAxis + this.width, this.yAxis, this.xAxis + this.width, this.yAxis + this.radius);
		context.lineTo(this.xAxis + this.width, this.yAxis + this.height - this.radius);
		context.quadraticCurveTo(this.xAxis + this.width, this.yAxis + this.height, this.xAxis + this.width - this.radius, this.yAxis + this.height);
		context.lineTo(this.xAxis + this.radius, this.yAxis + this.height);
		context.quadraticCurveTo(this.xAxis, this.yAxis + this.height, this.xAxis, this.yAxis + this.height - this.radius);
		context.lineTo(this.xAxis, this.yAxis + this.radius);
		context.quadraticCurveTo(this.xAxis, this.yAxis, this.xAxis + this.radius, this.yAxis);
		context.closePath();
		context.stroke();
		context.fill();
	}
}