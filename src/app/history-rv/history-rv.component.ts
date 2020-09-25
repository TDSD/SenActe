import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-rv',
  templateUrl: './history-rv.component.html',
  styleUrls: ['./history-rv.component.scss']
})
export class HistoryRvComponent implements OnInit {
annuler : boolean;
  constructor() { }
  supp(): void{
    this.annuler = true;
  }
  ngOnInit(): void {
  }

}
