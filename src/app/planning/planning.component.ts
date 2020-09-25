import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  ok : boolean;
  constructor() { }

  choisir(): void {
    this.ok = true
  }

  ngOnInit(): void {
  }

}
