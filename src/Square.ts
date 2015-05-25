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
		var imageObj = new Image();
		imageObj.src = this.getColor();
		var pattern = context.createPattern(imageObj, 'repeat');

		context.fillStyle = pattern;
		context.fill();
	}

	private drawRegularStroke(context: CanvasRenderingContext2D, unitSize: number): void {
		var imageObj = new Image();
		imageObj.src = ColorPatterns.getBlack();
		var pattern = context.createPattern(imageObj, 'repeat');

		context.lineWidth = unitSize * 0.045;
		context.strokeStyle = pattern;
		context.stroke();
	}
	
	private drawFrameStroke(context: CanvasRenderingContext2D, unitSize: number, frameState: FrameState): void {
		var imageObj = new Image();
		imageObj.src = frameState == FrameState.On ? ColorPatterns.getWhite() : ColorPatterns.getBlack();
		var pattern = context.createPattern(imageObj, 'repeat');

		context.lineWidth = unitSize * 0.045;
		context.strokeStyle = pattern;
		context.stroke();
	}	

	private getColor(): string {
		switch (this.state) {
			case SquareState.Off:
				return ColorPatterns.getGrey();

			case SquareState.Blue:
				return ColorPatterns.getBlue();

			case SquareState.Red:
				return ColorPatterns.getRed();

			case SquareState.Green:
				return ColorPatterns.getGreen();
		}
	}

}