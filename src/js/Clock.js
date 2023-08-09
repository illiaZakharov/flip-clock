export class Clock {
    #time;
    #observers = [];

    static getInstance() {
        if (!this.instance) {
            this.instance = new Clock();
        }

        return this.instance;
    }

    get time() {
        return this.#time;
    }

    set time(timeObj) {
        this.#time = timeObj;
        this.notifyObservers();
    }

    start() {
        this.updateTime();
    }

    updateTime() {
        const currentTime = new Date();
        const minutes = currentTime.getMinutes();

        if (this.time?.minutes !== minutes) {
            this.time = {
                hours: currentTime.getHours(),
                minutes,
            };
        }

        requestAnimationFrame(this.updateTime.bind(this));
    }

    registerObserver(observer) {
        this.#observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.#observers.indexOf(observer);

        if (index == -1) {
            throw new Error('Observer not found.');
        }

        this.#observers.splice(index, 1);
    }

    notifyObservers() {
        this.#observers.forEach((observer) => {
            observer.update();
        });
    }
}
