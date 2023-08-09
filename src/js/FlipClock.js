import { HourDigit, MinuteDigit } from './Digit.js';

export class FlipClock {
    #digits;

    constructor(clock) {
        this.element = document.getElementById('clock');
        this.clock = clock;
        this.clock.registerObserver(this);

        this.#digits = {
            hours: new HourDigit(this.clock.time.hours),
            minutes: new MinuteDigit(this.clock.time.minutes),
        };
    }

    update() {
        const { hours, minutes } = this.clock.time;

        if (hours !== this.#digits.hours.value) {
            this.#digits.hours.value = hours;
        }

        this.#digits.minutes.value = minutes;
    }
}
