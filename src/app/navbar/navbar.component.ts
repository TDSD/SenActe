import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
@Injectable()
export class NavbarComponent implements OnInit {
  role:string = "internaute";

  constructor() { }
  retour(): void {
    this.role = "internaute";
  }

  ngOnInit(): void {
  }
  

}
