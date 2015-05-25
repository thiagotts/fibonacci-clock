/// <reference path="SquareState.ts"/>
/// <reference path="FrameState.ts"/>

class ClockState {
	private hour: number;
	private minutes: number;

	constructor(public upperSquareOne: SquareState, public bottomSquareOne: SquareState,
		public squareTwo: SquareState, public squareThree: SquareState, public squareFive: SquareState,
		public upperFrameOne: FrameState, public bottomFrameOne: FrameState, public frameTwo: FrameState) { }


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
		if (this.minutes) return this.minutes;
		
		this.minutes = 0;
		this.minutes += 5 * (this.countAsMinutes(this.upperSquareOne) ? 1 : 0);
		this.minutes += 5 * (this.countAsMinutes(this.bottomSquareOne) ? 1 : 0);
		this.minutes += 5 * (this.countAsMinutes(this.squareTwo) ? 2 : 0);
		this.minutes += 5 * (this.countAsMinutes(this.squareThree) ? 3 : 0);
		this.minutes += 5 * (this.countAsMinutes(this.squareFive) ? 5 : 0);
		this.minutes += this.upperFrameOne == FrameState.On ? 1 : 0;
		this.minutes += this.bottomFrameOne == FrameState.On ? 1 : 0;
		this.minutes += this.frameTwo == FrameState.On ? 2 : 0;
		
		return this.minutes ;
	}

	public sameTimeAs(time: Time): boolean {
		return time.hour === this.hour &&
			time.minutes === this.minutes;
	}

	private countAsHour(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Red;
	}

	private countAsMinutes(state: SquareState): boolean {
		return state == SquareState.Blue || state == SquareState.Green;
	}
}