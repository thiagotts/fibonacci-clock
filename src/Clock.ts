/// <reference path="Square.ts"/>

class Clock {
	upperSquareOne: Square;
	bottomSquareOne: Square;
	squareTwo: Square;
	squareThree: Square;
	squareFive: Square;
	private unitSize: number;

	constructor(public context: CanvasRenderingContext2D, unitSize: number) {
		this.unitSize = unitSize;
		this.upperSquareOne = new Square(unitSize * 2.2, unitSize * 0.2, unitSize);
		this.bottomSquareOne = new Square(unitSize * 2.2, unitSize * 1.2, unitSize);
		this.squareTwo = new Square(unitSize * 0.2, unitSize * 0.2, unitSize * 2);
		this.squareThree = new Square(unitSize * 0.2, unitSize * 2.2, unitSize * 3);
		this.squareFive = new Square(unitSize * 3.2, unitSize * 0.2, unitSize * 5);
	}

	public drawClock(clockState: ClockState): void {
		this.squareThree.state = clockState.squareThree;
		this.squareThree.drawBottomLeft(this.context, this.unitSize);

		this.squareFive.state = clockState.squareFive;
		this.squareFive.drawRight(this.context, this.unitSize);

		this.drawRegular(this.upperSquareOne, clockState.upperSquareOne, clockState.upperFrameOne);
		this.drawRegular(this.bottomSquareOne, clockState.bottomSquareOne, clockState.bottomFrameOne);

		this.squareTwo.state = clockState.squareTwo;
		this.squareTwo.drawUpperLeft(this.context, this.unitSize, clockState.frameTwo);

		if (clockState.upperFrameOne == FrameState.On) {
			this.drawRegular(this.upperSquareOne, clockState.upperSquareOne, clockState.upperFrameOne);
		}

		if (clockState.bottomFrameOne == FrameState.On) {
			this.drawRegular(this.bottomSquareOne, clockState.bottomSquareOne, clockState.bottomFrameOne);
		}
	}

	private drawRegular(square: Square, squareState: SquareState, frameState: FrameState) {
		square.state = squareState;
		square.drawRegular(this.context, this.unitSize, frameState);
	}
}