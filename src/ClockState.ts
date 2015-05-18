/// <reference path="SquareState.ts"/>

class ClockState {
	public UpperSquareOne: SquareState;
	public BottomSquareOne: SquareState;
	public SquareTwo: SquareState;
	public SquareThree: SquareState;
	public SquareFive: SquareState;
	private hour: number;
	private minutes: number;
	
	public getHour(): number {
		if(this.hour) return this.hour;
		
		this.hour = 0;
		this.hour += this.countAsHour(this.UpperSquareOne) ? 1 : 0;
		this.hour += this.countAsHour(this.BottomSquareOne) ? 1 : 0;
		this.hour += this.countAsHour(this.SquareTwo) ? 2 : 0;
		this.hour += this.countAsHour(this.SquareThree) ? 3 : 0;
		this.hour += this.countAsHour(this.SquareFive) ? 5 : 0;
		return this.hour;
	}

	public getMinutes(): number {
		var minuteValue = 0;
		minuteValue += this.countAsMinutes(this.UpperSquareOne) ? 1 : 0;
		minuteValue += this.countAsMinutes(this.BottomSquareOne) ? 1 : 0;
		minuteValue += this.countAsMinutes(this.SquareTwo) ? 2 : 0;
		minuteValue += this.countAsMinutes(this.SquareThree) ? 3 : 0;
		minuteValue += this.countAsMinutes(this.SquareFive) ? 5 : 0;
		return minuteValue * 5;
	}

	private countAsHour(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Red;
	}

	private countAsMinutes(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Green;
	}	
}