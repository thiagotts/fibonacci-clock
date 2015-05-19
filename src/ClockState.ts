/// <reference path="SquareState.ts"/>

class ClockState {
	private hour: number;
	private minutes: number;

	constructor(public upperSquareOne: SquareState, public bottomSquareOne: SquareState,
		public squareTwo: SquareState, public squareThree: SquareState, public squareFive: SquareState) { }


	public getHour(): number {
		if (this.hour) return this.hour;

		this.hour = 0;
		this.hour += this.countAsHour(this.upperSquareOne) ? 1 : 0;
		this.hour += this.countAsHour(this.bottomSquareOne) ? 1 : 0;
		this.hour += this.countAsHour(this.squareTwo) ? 2 : 0;
		this.hour += this.countAsHour(this.squareThree) ? 3 : 0;
		this.hour += this.countAsHour(this.squareFive) ? 5 : 0;
		return this.hour;
	}

	public getMinutes(): number {
		var minuteValue = 0;
		minuteValue += this.countAsMinutes(this.upperSquareOne) ? 1 : 0;
		minuteValue += this.countAsMinutes(this.bottomSquareOne) ? 1 : 0;
		minuteValue += this.countAsMinutes(this.squareTwo) ? 2 : 0;
		minuteValue += this.countAsMinutes(this.squareThree) ? 3 : 0;
		minuteValue += this.countAsMinutes(this.squareFive) ? 5 : 0;
		return minuteValue * 5;
	}

	private countAsHour(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Red;
	}

	private countAsMinutes(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Green;
	}
}