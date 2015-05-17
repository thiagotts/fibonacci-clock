describe("Square", function() {
  var square;

  beforeEach(function() {
    square = new Square(1, 2, 3);
  });

  it("should return the x axis value", function() {
    var xAxis = square.getX();
    
    expect(xAxis).toEqual(1);
  });
});
