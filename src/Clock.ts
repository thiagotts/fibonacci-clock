/// <reference path="Square.ts"/>

class Clock {
	upperSquareOne: Square;
	bottomSquareOne: Square;
	squareTwo: Square;
	squareThree: Square;
	squareFive: Square;

	constructor(public context: CanvasRenderingContext2D, unitSize: number) {
		this.upperSquareOne = new Square(unitSize * 2, 0, unitSize);
		this.bottomSquareOne = new Square(unitSize * 2, unitSize, unitSize);
		this.squareTwo = new Square(0, 0, unitSize * 2);
		this.squareThree = new Square(0, unitSize * 2, unitSize * 3);
		this.squareFive = new Square(unitSize * 3, 0, unitSize * 5);
	}

	public drawClock(): void {
		this.upperSquareOne.draw(this.context);
		this.bottomSquareOne.draw(this.context);
		this.squareTwo.draw(this.context);
		this.squareThree.draw(this.context);
		this.squareFive.draw(this.context);
	}

	public getHour(): number {
		var hourValue = 0;
		hourValue += this.countAsHour(this.upperSquareOne.state) ? 1 : 0;
		hourValue += this.countAsHour(this.bottomSquareOne.state) ? 1 : 0;
		hourValue += this.countAsHour(this.squareTwo.state) ? 2 : 0;
		hourValue += this.countAsHour(this.squareThree.state) ? 3 : 0;
		hourValue += this.countAsHour(this.squareFive.state) ? 5 : 0;
		return hourValue;
	}

	public getMinutes(): number {
		var minuteValue = 0;
		minuteValue += this.countAsMinutes(this.upperSquareOne.state) ? 1 : 0;
		minuteValue += this.countAsMinutes(this.bottomSquareOne.state) ? 1 : 0;
		minuteValue += this.countAsMinutes(this.squareTwo.state) ? 2 : 0;
		minuteValue += this.countAsMinutes(this.squareThree.state) ? 3 : 0;
		minuteValue += this.countAsMinutes(this.squareFive.state) ? 5 : 0;
		return minuteValue * 5;
	}

	private countAsHour(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Red;
	}

	private countAsMinutes(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Green;
	}
}