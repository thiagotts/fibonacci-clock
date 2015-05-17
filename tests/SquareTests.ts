/// <reference path="tsd/jasmine.d.ts"/>
/// <reference path="../src/Square.ts"/>

describe("Square", function() {
  it("Constructor should create instance with accurate values", function() {
    var square = new Square(1, 2, 3);
    
    
    expect(square.xAxis).toEqual(1);
    expect(square.yAxis).toEqual(2);
    expect(square.length).toEqual(3);
    expect(square.state).toEqual(SquareState.Off);
  });
});
