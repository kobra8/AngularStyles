import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger
   ]
})
export class AppComponent {
  private infoClick = 'default';
  private paragraphClick = 'default';
  numberEntered;

  changeState() {
    this.infoClick = 'clicked';
    setTimeout(() => {
      this.infoClick = 'default';
    }, 3000);
  }





  // Part from starting with animations
  courseGoals = [
    { title: 'Master Angular Styling', isActiveGoal: false },
    { title: 'Understand Angular Animations', isActiveGoal: false },
    { title: 'Master Angular Animations', isActiveGoal: false },
  ];
  divClicked = false;
  doAnimate = false;

}
