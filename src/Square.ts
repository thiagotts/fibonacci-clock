/// <reference path="SquareState.ts"/>

class Square {
	public state: SquareState;

	constructor(public xAxis: number, public yAxis: number, public length: number) {
		this.state = SquareState.Off;
	}

	public draw(context: CanvasRenderingContext2D, unitSize: number): void {
		context.beginPath();
		context.rect(this.xAxis, this.yAxis, this.length, this.length);
		this.fillSquare(context);
		this.drawStroke(context, unitSize);
	}

	private fillSquare(context: CanvasRenderingContext2D): void {
		var imageObj = new Image();
		imageObj.src = this.getColor();
		var pattern = context.createPattern(imageObj, 'repeat');

		context.fillStyle = pattern;
		context.fill();
	}

	private drawStroke(context: CanvasRenderingContext2D, unitSize: number): void {
		var imageObj = new Image();
		imageObj.src = ColorPatterns.getBlack();
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