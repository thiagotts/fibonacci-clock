/// <reference path="Square.ts"/>

class Clock {
	upperSquareOne: Square;
	bottomSquareOne: Square;
	squareTwo: Square;
	squareThree: Square;
	squareFive: Square;

	constructor(public context: CanvasRenderingContext2D, unitSize: number) {
		this.upperSquareOne = new Square(unitSize * 2.2, unitSize * 0.2, unitSize);
		this.bottomSquareOne = new Square(unitSize * 2.2, unitSize * 1.2, unitSize);
		this.squareTwo = new Square(unitSize * 0.2, unitSize * 0.2, unitSize * 2);
		this.squareThree = new Square(unitSize * 0.2, unitSize * 2.2, unitSize * 3);
		this.squareFive = new Square(unitSize * 3.2, unitSize * 0.2, unitSize * 5);
	}

	public drawClock(clockState: ClockState): void {
		this.drawSquare(this.upperSquareOne, clockState.upperSquareOne);
		this.drawSquare(this.bottomSquareOne, clockState.bottomSquareOne);
		this.drawSquare(this.squareTwo, clockState.squareTwo);
		this.drawSquare(this.squareThree, clockState.squareThree);
		this.drawSquare(this.squareFive, clockState.squareFive);
	}
	
	private drawSquare(square: Square, squareState: SquareState) {
		square.state = squareState;
		square.draw(this.context);		
	}
}