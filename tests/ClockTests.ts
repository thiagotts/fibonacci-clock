/// <reference path="tsd/jasmine.d.ts"/>
/// <reference path="../src/Clock.ts"/>

describe("Only blue and red colors should count as hour.", function() {
  it("If the color is blue, it should count as hour.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsHour(SquareState.Blue);
    
    expect(result).toBe(true);
  });
  
  it("If the color is red, it should count as hour.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsHour(SquareState.Red);
    
    expect(result).toBe(true);
  });
  
  it("If the color is green, it should not count as hour.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsHour(SquareState.Green);
    
    expect(result).toBe(false);
  });  
  
  it("If the state is off, it should not count as hour.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsHour(SquareState.Off);
    
    expect(result).toBe(false);
  });     
});

describe("Only blue and green colors should count as minutes.", function() {
  it("If the color is blue, it should count as minutes.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsMinutes(SquareState.Blue);
    
    expect(result).toBe(true);
  });
  
  it("If the color is green, it should count as minutes.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsMinutes(SquareState.Green);
    
    expect(result).toBe(true);
  });
  
  it("If the color is red, it should not count as minutes.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsMinutes(SquareState.Red);
    
    expect(result).toBe(false);
  });  
  
  it("If the state is off, it should not count as minutes.", function() {
    var clock = new Clock(null, 1);
    
    var result = clock.countAsMinutes(SquareState.Off);
    
    expect(result).toBe(false);
  });     
});

describe("getHour and getMinutes methods should return values based on square states.", function() {
  it("Test case: 0:50", function() {
    var clock = new Clock(null, 1);
    clock.upperSquareOne.state = SquareState.Off;
    clock.bottomSquareOne.state = SquareState.Off;
    clock.squareTwo.state = SquareState.Green;
    clock.squareThree.state = SquareState.Green;
    clock.squareFive.state = SquareState.Green;
    
    var hour = clock.getHour();
    var minutes = clock.getMinutes();
    
    expect(hour).toBe(0);
    expect(minutes).toBe(50);    
  });  
});