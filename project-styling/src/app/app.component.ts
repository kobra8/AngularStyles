import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { query, trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerState', [
      transition('* => *',[
        group([
          query(':enter', [
            // animateChild(),  ->funkcja odtwarza animacje zdefiniowane w elementach dziaciach
            // w tym miejscu, gdyby jej nie było to animacje rodzica napisują dzieci
            //Używać w razie potrzeby
            style({
              transform: 'translateY(-400px)',
              opacity: 0
            }),
            animate('500ms ease-out')
          ], {optional: true}),
          query(':leave', [
            style({
              transform: 'translateY(600px)',
              opacity: 0
            }),
            animate('500ms ease-out')
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if(!routeData) {
      return 'rootPage';
    }
    return routeData['page']
  }

}
