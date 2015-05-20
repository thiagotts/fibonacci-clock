/// <reference path="SquareState.ts"/>

class Square {
	public state: SquareState;

	constructor(public xAxis: number, public yAxis: number, public length: number) {
		this.state = SquareState.Off;
	}

	public draw(context: CanvasRenderingContext2D): void {
		context.beginPath();
		context.rect(this.xAxis, this.yAxis, this.length, this.length);
		context.fillStyle = this.getColor();
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = 'black';
		context.stroke();
	}

	private getColor(): string {
		switch (this.state) {
			case SquareState.Off:
				return 'grey';

			case SquareState.Blue:
				return 'blue';

			case SquareState.Red:
				return 'red';

			case SquareState.Green:
				return 'green';
		}
	}
}