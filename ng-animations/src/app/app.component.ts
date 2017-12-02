import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseGoals = [
    {title: 'Master Angular Styling', isActiveGoal: false },
    {title: 'Understand Angular Animations', isActiveGoal: false },
    {title: 'Master Angular Animations', isActiveGoal: false },
  ];
divClicked = false;
doAnimate = false;
}
