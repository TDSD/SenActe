import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {
  ok : boolean;
  super : boolean; 
  constructor() { }

  enregistrer(): void {
    this.super = true;
  }

  desactiver(): void {
    this.ok = true;
  }
  
  ngOnInit(): void {
  }

}
