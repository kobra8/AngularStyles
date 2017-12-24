import { Component } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private builder: AnimationBuilder
  ) {}

  //Tworzenie animacji bez triggerów -> AnimationBuilder
  animate(element: any) {
    //Definicja funkcji animation
    const animation = this.builder.build([
      style({
        backgroundColor: 'red',
        width: '200px'
      }),
      animate(300, style({
        width: '500px'
      })),
      animate(200)
    ]);
    const player = animation.create(element);
    player.play();
    //Element jest przekazywany w pliku HTML jako argument funkcji animate()
  }
}
