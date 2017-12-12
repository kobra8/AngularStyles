import { Component } from '@angular/core';
import { showStateTrigger, animateStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    showStateTrigger,
    animateStateTrigger
  ]
})
export class AppComponent {
  title = 'Pro - animations';
  isShown = false;
  width = 400;
  animate = false;
}
