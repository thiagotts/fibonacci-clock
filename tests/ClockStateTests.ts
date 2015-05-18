/// <reference path="tsd/jasmine.d.ts"/>
/// <reference path="../src/ClockState.ts"/>

describe("Only blue and red colors should count as hour.", function() {
  it("If the color is blue, it should count as hour.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsHour(SquareState.Blue);
    
    expect(result).toBe(true);
  });
  
  it("If the color is red, it should count as hour.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsHour(SquareState.Red);
    
    expect(result).toBe(true);
  });
  
  it("If the color is green, it should not count as hour.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsHour(SquareState.Green);
    
    expect(result).toBe(false);
  });  
  
  it("If the state is off, it should not count as hour.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsHour(SquareState.Off);
    
    expect(result).toBe(false);
  });     
});

describe("Only blue and green colors should count as minutes.", function() {
  it("If the color is blue, it should count as minutes.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsMinutes(SquareState.Blue);
    
    expect(result).toBe(true);
  });
  
  it("If the color is green, it should count as minutes.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsMinutes(SquareState.Green);
    
    expect(result).toBe(true);
  });
  
  it("If the color is red, it should not count as minutes.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsMinutes(SquareState.Red);
    
    expect(result).toBe(false);
  });  
  
  it("If the state is off, it should not count as minutes.", function() {
    var clockState = new ClockState();
    
    var result = clockState.countAsMinutes(SquareState.Off);
    
    expect(result).toBe(false);
  });     
});

describe("getHour and getMinutes methods should return values based on square states.", function() {
  var clockState = new ClockState();  
  
  it("Test case: 0:50", function() {
    clockState.UpperSquareOne = SquareState.Off;
    clockState.BottomSquareOne = SquareState.Off;
    clockState.SquareTwo = SquareState.Green;
    clockState.SquareThree = SquareState.Green;
    clockState.SquareFive = SquareState.Green;
    
    var hour = clockState.getHour();
    var minutes = clockState.getMinutes();
    
    expect(hour).toBe(0);
    expect(minutes).toBe(50);    
  }); 
  
  it("Test case: 8:35", function() {
    clockState.UpperSquareOne = SquareState.Off;
    clockState.BottomSquareOne = SquareState.Off;
    clockState.SquareTwo = SquareState.Green;
    clockState.SquareThree = SquareState.Red;
    clockState.SquareFive = SquareState.Blue;
    
    var hour = clockState.getHour();
    var minutes = clockState.getMinutes();
    
    expect(hour).toBe(8);
    expect(minutes).toBe(35);    
  });  
});