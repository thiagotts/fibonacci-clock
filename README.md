# Fibonacci clock

<p align="center">
  <img src="https://s3.amazonaws.com/tts.files/fibonacci-clock.gif" alt="Fibonacci Clock"/>
</p>

This is a responsive HTML5 version of [Philippe Chrétien's Fibonacci clock](https://www.kickstarter.com/projects/basbrun/fibonacci-clock-an-open-source-clock-for-nerds-wit?ref=category_newest) written in TypeScript and featuring an exact minutes count.

<p align="center">
  [See it live](https://fibonacci.thiago.work)
</p>

## How do I tell time?

The size of each square corresponds to its value. In order to tell time, you need to combine these values with color codes that correspond to the hour, minutes, or both. Then you have to multiply the minutes value by 5.

<p align="center">
  <img src="https://s3.amazonaws.com/tts.files/how-to-tell-time.png" alt="How to tell time on the Fibonacci Clock"/>
</p>

Although the physical clock shows minutes only as multiples of 5, the HTML5 version makes it possible to tell minutes accurately. It is done by lighting up the frames of the four upper left squares of the clock. The time is calculated the same way as before, then the values of the lit up frames are added to the minutes. Take the example below:

<p align="center">
  <img src="https://s3.amazonaws.com/tts.files/exact-minutes-display.png" alt="Fibonacci Clock"/>
</p>

The clock is displaying `(1+2+5)=8` for the hour and `[(1+2+3+5)×5]+3=58` for the minutes. It's **8:58**. We added 3 to the minutes at the end of the expression because the clock has squares of values 1 and 2 with their frames lit up.


## Multiple possibilities

You might have noticed the rules to tell time on this clock allow a single time to be represented in multiple ways. Try [refreshing the page](https://fibonacci.thiago.work) while seeing the clock and notice that all different setups end up giving you the current time. The clock randomly selects one possible way to display time and draws it on the canvas.

## Embed it

Clicking on the embed link at the bottom of the [clock's page](https://fibonacci.thiago.work) will give you a code snippet that can be used to embed the clock on your site.

## License

GNU General Public License. See [LICENSE file](https://github.com/thiagotts/fibonacci-clock/blob/master/LICENSE).

