import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [`
    h1 {
      margin: 0;
      font-size: 14px;
      /* color: #8c8c8c;  -> Zakomentowany kolor h1 -> stylowanie przeniesione do komponentu rodzica -> quotes-component -> host-context() "/deep/" */
      }
  `],
  encapsulation: ViewEncapsulation.Emulated // Ta wartość jest domyślna i nie trzeba jej ustawiać. Angular wtedy stosuje style do każdego komponentu osobno jako Shadow DOM
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
