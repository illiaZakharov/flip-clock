class Digit {
    #value = 0;
    element;

    get value() {
        return this.#value;
    }

    set value(digit) {
        this.#value = digit;
        this.element.innerText = digit;
        this.flip();
    }

    flip() {
        console.log('flip');
    }
}

export class HourDigit extends Digit {
    constructor() {
        super();
        this.element = document.getElementById('hours');
        this.type = 'hours';
    }
}

export class MinuteDigit extends Digit {
    constructor() {
        super();
        this.element = document.getElementById('minutes');
        this.type = 'minutes';
    }
}
