/// <reference path="SquareState.ts"/>

class Square {
	private radius: number = 15;
	public state: SquareState;

	constructor(public xAxis: number, public yAxis: number, public length: number) {
		this.state = SquareState.Off;
	}

	public drawRegular(context: CanvasRenderingContext2D, unitSize: number, frameState: FrameState): void {
		context.beginPath();
		context.rect(this.xAxis, this.yAxis, this.length, this.length);
		this.fillSquare(context);
		this.drawFrameStroke(context, unitSize, frameState);
	}

	public drawUpperLeft(context: CanvasRenderingContext2D, unitSize: number, frameState: FrameState): void {
		context.beginPath();
		context.moveTo(this.xAxis + this.radius, this.yAxis);
		context.lineTo(this.xAxis + this.length, this.yAxis);
		context.lineTo(this.xAxis + this.length, this.yAxis + this.length);
		context.lineTo(this.xAxis, this.yAxis + this.length);
		context.lineTo(this.xAxis, this.yAxis + this.radius);
		context.quadraticCurveTo(this.xAxis, this.yAxis, this.xAxis + this.radius, this.yAxis);
		context.closePath();

		this.fillSquare(context);
		this.drawFrameStroke(context, unitSize, frameState);
	}

	public drawRight(context: CanvasRenderingContext2D, unitSize: number): void {
		context.beginPath();
		context.moveTo(this.xAxis, this.yAxis);
		context.lineTo(this.xAxis + this.length - this.radius, this.yAxis);
		context.quadraticCurveTo(this.xAxis + this.length, this.yAxis, this.xAxis + this.length, this.yAxis + this.radius);
		context.lineTo(this.xAxis + this.length, this.yAxis + this.length - this.radius);
		context.quadraticCurveTo(this.xAxis + this.length, this.yAxis + this.length, this.xAxis + this.length - this.radius, this.yAxis + this.length);
		context.lineTo(this.xAxis, this.yAxis + this.length);
		context.lineTo(this.xAxis, this.yAxis + this.radius);
		context.closePath();
		
		this.fillSquare(context);
		this.drawRegularStroke(context, unitSize);		
	}

	public drawBottomLeft(context: CanvasRenderingContext2D, unitSize: number): void {
		context.beginPath();
		context.moveTo(this.xAxis, this.yAxis);
		context.lineTo(this.xAxis + this.length, this.yAxis);
		context.lineTo(this.xAxis + this.length, this.yAxis + this.length);
		context.lineTo(this.xAxis + this.radius, this.yAxis + this.length);
		context.quadraticCurveTo(this.xAxis, this.yAxis + this.length, this.xAxis, this.yAxis + this.length - this.radius);
		context.lineTo(this.xAxis, this.yAxis + this.radius);
		context.closePath();
		
		this.fillSquare(context);
		this.drawRegularStroke(context, unitSize);			
	}

	private fillSquare(context: CanvasRenderingContext2D): void {
		var pattern = context.createPattern(this.getColor(), 'repeat');
		context.fillStyle = pattern;
		context.fill();
	}

	private drawRegularStroke(context: CanvasRenderingContext2D, unitSize: number): void {
		var pattern = context.createPattern(ColorPatterns.Black.image, 'repeat');

		context.lineWidth = unitSize * 0.045;
		context.strokeStyle = pattern;
		context.stroke();
	}
	
	private drawFrameStroke(context: CanvasRenderingContext2D, unitSize: number, frameState: FrameState): void {
		var pattern = context.createPattern(frameState == FrameState.On ? ColorPatterns.White.image : ColorPatterns.Black.image, 'repeat');

		context.lineWidth = unitSize * 0.045;
		context.strokeStyle = pattern;
		context.stroke();
	}	

	private getColor(): HTMLImageElement {
		switch (this.state) {
			case SquareState.Off:
				return ColorPatterns.Grey.image;

			case SquareState.Blue:
				return ColorPatterns.Blue.image;

			case SquareState.Red:
				return ColorPatterns.Red.image;

			case SquareState.Green:
				return ColorPatterns.Green.image;
		}
	}

}