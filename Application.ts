class Application {
	private width: number;
	private height: number;
	private unitSize: number;
	private sizeFactor: number = 0.15;
	private context2d: CanvasRenderingContext2D;

	constructor() {
		this.setUpDimensions();
	}
	
	private setUpDimensions() : void {
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
	
	public refresh() : void {
		this.setUpDimensions();
		this.start();
	}
}