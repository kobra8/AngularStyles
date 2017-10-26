import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
@Input() goal: any;

  constructor() { }

  ngOnInit() {
  }

}
