import { Component } from '@angular/core';
import { animate, style, transition, trigger, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([
          query(':self', [
            style({
              opacity: 0
            }),
            animate(800)
          ]),
          query('.panel-heading', [
            style({
              transform: 'translateY(-300px)',
              opacity: 0
            }),
            animate(300)
          ]),
          query('.panel-body', [
            style({
              transform: 'translateX(-100%)',
              opacity: 0
            }),
            animate(300)
          ]),
          query('.panel-footer', [
            style({
              transform: 'translateY(300px)',
              opacity: 0
            }),
            animate(300)
          ])
        ]),
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ]),
      transition('* => *',[
        //Tutaj :enter oznacza wybór w metodzie query elementu który się dopiero pojawi
        query(':enter',[
          style({
            transform: 'scale(1)'
          }),
          animate(200, style({
            transform: 'scale(1.1)'
          })),
          animate(100)
        ], {optional: true}), //Ta opcja zabezpiecza przed błędem jeżeli obiekt :enter już istnieje
     query('div p, button', [
       animate(300, style({
         color: 'yellow'
       })),
       animate(200)
     ])
      ])
    ])
  ]
})
export class AppComponent {
  showPanel = false;
  showParagraph = true;
}
// Query selectors list:
// :enter , :leave  => Query added/ removed elements
// :animating  => Query all elements which are currently playing an animation
// @triggerName  => Query all elements which use that animation trigger
// @*  => Query all elements which have ANY animation trigger
// :self  => Query the parent element (i.e. the one on which the trigger triggering the transition was applied on)
