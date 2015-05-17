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
	
	private countAsHour(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Red;
	}
}