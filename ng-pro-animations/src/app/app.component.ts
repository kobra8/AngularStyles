import { Component } from '@angular/core';
import { showStateTrigger, animateStateTrigger, listStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger
  ]
})
export class AppComponent {
  title = 'Pro - animations';
  isShown = false;
  width = 400;
  animate = false;
  testResults = [];

  onAddElement() {
    this.testResults.push(Math.random());
  }

  onAnimationStarted(event: AnimationEvent) {
    console.log(event)
  }

  onAnimationDone(event: AnimationEvent) {
    console.log(event)
  }

}
