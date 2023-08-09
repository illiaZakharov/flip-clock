import { Clock } from './Clock.js';
import { FlipClock } from './FlipClock.js';

const clock = Clock.getInstance();
const flipClock = new FlipClock(clock);
