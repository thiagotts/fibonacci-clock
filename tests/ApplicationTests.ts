/// <reference path="tsd/jasmine.d.ts"/>
/// <reference path="../src/Application.ts"/>
/// <reference path="../src/ClockState.ts"/>
/// <reference path="../src/extensions/DictionaryExtensions.ts"/>



describe("Generation of clock states.", function() {
  var application = new Application();
  var clockStates: ClockState[] = application.getClockStates();

  it("It must create 1024 clock states.", function() {
    expect(clockStates.length).toBe(1024);
  });

  it("All clock states must be different.", function() {
    for (var index1 = 0; index1 < clockStates.length; index1++) {
      var count = 0;
      var state = clockStates[index1];

      for (var index2 = 0; index2 < clockStates.length; index2++) {
        var element = clockStates[index2];
        if (element.UpperSquareOne === state.UpperSquareOne &&
          element.BottomSquareOne === state.BottomSquareOne &&
          element.SquareTwo === state.SquareTwo &&
          element.SquareThree === state.SquareThree &&
          element.SquareFive === state.SquareFive) {
          count++;
        }
      }

      expect(count).toBe(1);
    }
  });
});

describe("Generation of time dictionary.", function() {
  var application = new Application();
  application.createTimeDictionary();  

  it("It must create 156 time combinations.", function() {
    expect(DictionaryExtensions.getLength(application.timeDictionary)).toBe(13);

    for (var index = 0; index < 13; index++) {
      expect(DictionaryExtensions.getLength(application.timeDictionary[index])).toBe(12);
    }
  });

  it("All hour values must be different.", function() {
    for(var index = 0; index < 13; index++) {
      expect(application.timeDictionary[index.toString()]).not.toBeNull();
    }  
  });
  
  it("All minute values must be different.", function() {
    for(var index = 0; index < 60; index += 5) {
      expect(application.timeDictionary[index.toString()]).not.toBeNull();
    }  
  });  
});