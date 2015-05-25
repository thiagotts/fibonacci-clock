/// <reference path="extensions/EnumExtensions.ts"/>
/// <reference path="extensions/IDictionary.ts"/>
/// <reference path="SquareState.ts"/>
/// <reference path="ClockFrame.ts"/>
/// <reference path="Time.ts"/>

class Application {
	private unitSize: number;
	private context2d: CanvasRenderingContext2D;
	public timeDictionary: IDictionary<IDictionary<ClockState[]>>;
	public currentClockState: ClockState;
	private width: number;
	private height: number;

	constructor() {
		this.setUpDimensions();
		this.fillTimeDictionary();
	}

	private setUpDimensions(): void {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.unitSize = this.width * 5 < this.height * 8 ?
			(this.width * 0.094) : (this.height * 0.15);
	}

	public start(): void {
		var canvas = <HTMLCanvasElement>document.getElementById('canvas');
		canvas.width = this.unitSize * 8.4;
		canvas.height = this.unitSize * 5.4;
		canvas.style.marginTop = ((this.height - (canvas.height)) / 2) + "px";
		canvas.style.marginLeft = ((this.width - (canvas.width)) / 2) + "px";

		this.context2d = <CanvasRenderingContext2D>canvas.getContext('2d');
		this.context2d.clearRect(0, 0, canvas.width, canvas.height);

		this.drawClockFrame(canvas.width, canvas.height);
		this.drawClock();
	}

	public refresh(): void {
		this.setUpDimensions();
		this.start();

		var clock = new Clock(this.context2d, this.unitSize);
		clock.drawClock(this.currentClockState);
	}

	private drawClockFrame(width: number, height: number): void {
		var rect = new ClockFrame(0, 0, width, height);
		rect.draw(this.context2d);
	}

	private drawClock = () => {
		var time = this.getCurrentTime();
		if (!this.currentClockState || !this.currentClockState.sameTimeAs(time)) {
			var clock = new Clock(this.context2d, this.unitSize);
			this.currentClockState = this.getClockState(time);
			clock.drawClock(this.currentClockState);
		}

		window.requestAnimationFrame(this.drawClock);
	}

	private getClockState(time: Time): ClockState {
		var clockStates = this.timeDictionary[time.hour.toString()][time.minutes.toString()];
		var index = Math.floor((Math.random() * clockStates.length));
		return clockStates[index];
	}

	private getCurrentTime(): Time {
		var currentDate = new Date();
		var hour = currentDate.getHours();
		hour = (hour == 12 ? 12 : hour % 12);
		var minutes = currentDate.getMinutes();

		return { hour: hour, minutes: minutes };
	}

	private fillTimeDictionary(): void {
		this.createTimeDictionary();
		var clockStates = this.createClockStates();

		for (var index = 0; index < clockStates.length; index++) {
			var state = clockStates[index];
			var hour = state.getHour();
			var minutes = state.getMinutes();

			var time = this.timeDictionary[hour.toString()][minutes.toString()];
			if (time == null) continue;

			time.push(state);
		}
	}

	private createTimeDictionary(): void {
		var hours = this.getHours();
		var minutes = this.getMinutes();

		this.timeDictionary = {};
		for (var i1 = 0; i1 < hours.length; i1++) {
			this.timeDictionary[i1.toString()] = {};
			for (var i2 = 0; i2 < minutes.length; i2++) {
				this.timeDictionary[i1.toString()][i2.toString()] = [];
			}
		}
	}

	private createClockStates(): ClockState[] {
		var states: ClockState[] = [];
		var index = 0;

		var stateValues = EnumExtensions.getValues(SquareState);
		var frameValues = EnumExtensions.getValues(FrameState);

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
							for (var i6 = 0; i6 < frameValues.length; i6++) {
								var upperFrameOne = frameValues[i6];
								for (var i7 = 0; i7 < frameValues.length; i7++) {
									var bottomFrameOne = frameValues[i7];
									for (var i8 = 0; i8 < frameValues.length; i8++) {
										var frameTwo = frameValues[i8];
										states[index] = new ClockState(
											upperSquareOneState,
											bottomSquareOneState,
											squareTwoState,
											squareThreeState,
											squareFiveState,
											upperFrameOne,
											bottomFrameOne,
											frameTwo);
										index++;
									}
								}
							}
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
		for (var index = 0; index < 60; index++) {
			minutes[index] = index;
		}

		return minutes;
	}
}