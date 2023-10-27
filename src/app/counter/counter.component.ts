import { Component } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  Sound: Howl;

  constructor() {
    this.Sound = new Howl({
      src: ['../../assets/clickSound.wav'], // Update with the actual path
    });
  }
  increment() {
    this.counter++;
    this.Sound.play();
  }
  decrement() {
    if (this.counter === 0) {
      return;
    }
    this.counter--;
    this.Sound.play();
  }
  reset() {
    this.counter = 0;
  }
}
