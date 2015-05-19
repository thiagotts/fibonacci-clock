/// <reference path="extensions/EnumExtensions.ts"/>
/// <reference path="SquareState.ts"/>

class Application {
	private width: number;
	private height: number;
	private unitSize: number;
	private sizeFactor: number = 0.15;
	private context2d: CanvasRenderingContext2D;
	private clockStates: ClockState[];

	constructor() {
		this.setUpDimensions();
		this.clockStates = this.getClockStates();
	}

	private setUpDimensions(): void {
		this.width = document.documentElement.clientWidth;
		this.height = document.documentElement.clientHeight;
		this.unitSize = this.width < this.height ? (this.width * this.sizeFactor) : (this.height * this.sizeFactor);
	}

	public start(): void {
		var canvas = <HTMLCanvasElement>document.getElementById('canvas');
		canvas.width = this.unitSize * 8;
		canvas.height = this.unitSize * 5;
		canvas.style.marginTop = ((this.height - (this.unitSize * 5)) / 2) + "px";
		canvas.style.marginLeft = ((this.width - (this.unitSize * 8)) / 2) + "px";

		this.context2d = <CanvasRenderingContext2D>canvas.getContext('2d');
		this.context2d.clearRect(0, 0, canvas.width, canvas.height);

		var clock = new Clock(this.context2d, this.unitSize);
		clock.drawClock();
	}

	public refresh(): void {
		this.setUpDimensions();
		this.start();
	}

	private getClockStates(): ClockState[] {
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
}