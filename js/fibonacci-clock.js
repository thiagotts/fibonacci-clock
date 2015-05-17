var Square = (function () {
    function Square(xAxis, yAxis, length) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.length = length;
    }
    Square.prototype.draw = function (context) {
        context.beginPath();
        context.rect(this.xAxis, this.yAxis, this.length, this.length);
        context.fillStyle = 'grey';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'black';
        context.stroke();
    };
    Square.prototype.getX = function () {
        return this.xAxis;
    };
    return Square;
})();
/// <reference path="Square.ts"/>
var Clock = (function () {
    function Clock(context, unitSize) {
        this.context = context;
        this.upperSquareOne = new Square(unitSize * 2, 0, unitSize);
        this.bottomSquareOne = new Square(unitSize * 2, unitSize, unitSize);
        this.squareTwo = new Square(0, 0, unitSize * 2);
        this.squareThree = new Square(0, unitSize * 2, unitSize * 3);
        this.squareFive = new Square(unitSize * 3, 0, unitSize * 5);
    }
    Clock.prototype.drawClock = function () {
        this.upperSquareOne.draw(this.context);
        this.bottomSquareOne.draw(this.context);
        this.squareTwo.draw(this.context);
        this.squareThree.draw(this.context);
        this.squareFive.draw(this.context);
    };
    return Clock;
})();
var Application = (function () {
    function Application() {
        this.sizeFactor = 0.15;
        this.setUpDimensions();
    }
    Application.prototype.setUpDimensions = function () {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
        this.unitSize = this.width < this.height ? (this.width * this.sizeFactor) : (this.height * this.sizeFactor);
    };
    Application.prototype.start = function () {
        var canvas = document.getElementById('canvas');
        canvas.width = this.unitSize * 8;
        canvas.height = this.unitSize * 5;
        canvas.style.marginTop = ((this.height - (this.unitSize * 5)) / 2) + "px";
        canvas.style.marginLeft = ((this.width - (this.unitSize * 8)) / 2) + "px";
        this.context2d = canvas.getContext('2d');
        this.context2d.clearRect(0, 0, canvas.width, canvas.height);
        var clock = new Clock(this.context2d, this.unitSize);
        clock.drawClock();
    };
    Application.prototype.refresh = function () {
        this.setUpDimensions();
        this.start();
    };
    return Application;
})();
//# sourceMappingURL=fibonacci-clock.js.map