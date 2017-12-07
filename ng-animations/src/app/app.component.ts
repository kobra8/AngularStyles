import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px'
      })),
      state('mousedown', style({
        backgroundColor: 'red',
        border: '1px solid black',
        width: '100px',
        height: '100px'
      })),
      transition('default => clicked', animate('2s 500ms ease-in')),
      transition('clicked => default', animate(300)),
      transition('mousedown <=> clicked', animate(600)),
      transition('default => mousedown', animate(600)),
    //  transition('clicked => mousedown', animate(300)),
    ])
  ]
})
export class AppComponent {
  private infoClick = 'default';
  private paragraphClick = 'default';

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
