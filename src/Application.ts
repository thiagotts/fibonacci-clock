/// <reference path="extensions/EnumExtensions.ts"/>
/// <reference path="extensions/IDictionary.ts"/>
/// <reference path="SquareState.ts"/>
/// <reference path="Time.ts"/>

class Application {
	private static unitSize: number;
	private static context2d: CanvasRenderingContext2D;
	public static timeDictionary: IDictionary<IDictionary<ClockState[]>>;
	public static currentClockState: ClockState;
	private width: number;
	private height: number;

	constructor() {
		this.setUpDimensions();
		this.fillTimeDictionary();
	}

	private setUpDimensions(): void {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		Application.unitSize = this.width * 5 < this.height * 8 ?
			(this.width * 0.094) : (this.height * 0.15);	
	}

	public start(): void {
		var canvas = <HTMLCanvasElement>document.getElementById('canvas');
		canvas.width = Application.unitSize * 8;
		canvas.height = Application.unitSize * 5;
		canvas.style.marginTop =  ((this.height - (Application.unitSize * 5)) / 2) + "px";
		canvas.style.marginLeft = ((this.width - (Application.unitSize * 8)) / 2) + "px";

		Application.context2d = <CanvasRenderingContext2D>canvas.getContext('2d');
		Application.context2d.clearRect(0, 0, canvas.width, canvas.height);

		Application.drawClock();
	}

	public refresh(): void {
		this.setUpDimensions();
		this.start();

		var clock = new Clock(Application.context2d, Application.unitSize);
		clock.drawClock(Application.currentClockState);
	}

	private static drawClock(): void {
		var time = Application.getCurrentTime();
		if (!Application.currentClockState || !Application.currentClockState.sameTimeAs(time)) {
			var clock = new Clock(Application.context2d, Application.unitSize);
			Application.currentClockState = Application.getClockState(time);
			clock.drawClock(Application.currentClockState);
		}

		window.requestAnimationFrame(Application.drawClock);
	}

	private static getClockState(time: Time): ClockState {
		var clockStates = Application.timeDictionary[time.hour.toString()][time.minutes.toString()];
		var index = Math.floor((Math.random() * clockStates.length));
		return clockStates[index];
	}

	private static getCurrentTime(): Time {
		var currentDate = new Date();
		var hour = currentDate.getHours();
		hour = (hour == 12 ? 12 : hour % 12);
		var minutes = Math.floor(currentDate.getMinutes() / 5);

		return { hour: hour, minutes: minutes };
	}

	private fillTimeDictionary(): void {
		this.createTimeDictionary();
		var clockStates = this.createClockStates();

		for (var index = 0; index < clockStates.length; index++) {
			var state = clockStates[index];
			var hour = state.getHour();
			var minutes = state.getMinutes() / 5;

			var time = Application.timeDictionary[hour.toString()][minutes.toString()];
			if (time == null) continue;

			time.push(state);
		}
	}

	private createTimeDictionary(): void {
		var hours = this.getHours();
		var minutes = this.getMinutes();

		Application.timeDictionary = {};
		for (var i1 = 0; i1 < hours.length; i1++) {
			Application.timeDictionary[i1.toString()] = {};
			for (var i2 = 0; i2 < minutes.length; i2++) {
				Application.timeDictionary[i1.toString()][i2.toString()] = [];
			}
		}
	}

	private createClockStates(): ClockState[] {
		var states: ClockState[] = [];
		var index = 0;

		var stateValues = EnumExtensions.getValues(SquareState);
		for (var i1 = 0; i1 < stateValues.length; i1++) {
			var upperSquareOneState = stateValues[i1];
			for (var i2 = 0; i2 < stateValues.length; i2++) {
				var bottomSquareOneState = stateValues[i2];
				for (var i3 = 0; i3 < stateValues.length; i3++) {
					var squareTwoState = stateValues[i3];
					for (var i4 = 0; i4 < stateValues.length; i4++) {
						var squareThreeState = stateValues[i4];
						for (var i5 = 0; i5 < stateValues.length; i5++) {
							var squareFiveState = stateValues[i5];
							states[index] = new ClockState(
								upperSquareOneState,
								bottomSquareOneState,
								squareTwoState,
								squareThreeState,
								squareFiveState
								);
							index++;
						}
					}
				}
			}
		}

		return states;
	}

	private getHours(): number[] {
		var hours: number[] = [];
		for (var index = 0; index < 13; index++) {
			hours[index] = index;
		}

		return hours;
	}

	private getMinutes(): number[] {
		var minutes: number[] = [];
		for (var index = 0; index < 12; index++) {
			minutes[index] = index * 5;
		}

		return minutes;
	}
}