/// <reference path="tsd/jasmine.d.ts"/>
/// <reference path="../src/Application.ts"/>
/// <reference path="../src/ClockState.ts"/>
/// <reference path="../src/Clock.ts"/>
/// <reference path="../src/extensions/DictionaryExtensions.ts"/>

describe("Generation of clock states.", function() {
  var application = new Application();
  var clockStates: ClockState[] = application.createClockStates();

  it("It must create 8192 clock states.", function() {
    expect(clockStates.length).toBe(8192);
  });

  it("All clock states must be different.", function() {
    for (var index1 = 0; index1 < clockStates.length; index1++) {
      var count = 0;
      var state = clockStates[index1];

      for (var index2 = 0; index2 < clockStates.length; index2++) {
        var element = clockStates[index2];
        if (element.upperSquareOne === state.upperSquareOne &&
          element.bottomSquareOne === state.bottomSquareOne &&
          element.squareTwo === state.squareTwo &&
          element.squareThree === state.squareThree &&
          element.squareFive === state.squareFive &&
          element.upperFrameOne === state.upperFrameOne &&
          element.bottomFrameOne === state.bottomFrameOne &&
          element.frameTwo === state.frameTwo) {
          count++;
        }
      }

      expect(count).toBe(1);
    }
  });
});

describe("Creation of time dictionary.", function() {
  var application = new Application();
  application.createTimeDictionary();

  it("It must create 780 time combinations.", function() {
    expect(DictionaryExtensions.getLength(application.timeDictionary)).toBe(13);

    for (var index = 0; index < 13; index++) {
      expect(DictionaryExtensions.getLength(application.timeDictionary[index])).toBe(60);
    }
  });

  it("All hour values must be different.", function() {
    for (var index = 0; index < 13; index++) {
      expect(application.timeDictionary[index.toString()]).not.toBeNull();
    }
  });

  it("All minute values must be different.", function() {
    for (var index = 0; index < 60; index++) {
      expect(application.timeDictionary[index.toString()]).not.toBeNull();
    }
  });
});

describe("Filling the time dictionary.", function() {
  var application = new Application();

  it("The dictionary must have clock states that match the time values.", function() {
    for (var hourKey in application.timeDictionary) {
      if (!application.timeDictionary.hasOwnProperty(hourKey)) continue;
      var hourDictionary = application.timeDictionary[hourKey];

      for (var minuteKey in hourDictionary) {
        if (!hourDictionary.hasOwnProperty(minuteKey)) continue;
        var states = application.timeDictionary[hourKey][minuteKey];

        expect(states).not.toBeNull();
        expect(states.length).toBeGreaterThan(0);

        for (var index = 0; index < states.length; index++) {
          var state = states[index];
          var hour = parseInt(hourKey, 10);
          var minutes = parseInt(minuteKey, 10);

          expect(hour).toBe(state.getHour());
          expect(minutes).toBe(state.getMinutes());
        }
      }
    }
  });

});