import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-declaration-deces',
  templateUrl: './declaration-deces.component.html',
  styleUrls: ['./declaration-deces.component.scss']
})
export class DeclarationDecesComponent implements OnInit {
  declarerFormDeces = this.fb.group({
    
  });
  constructor(private fb : FormBuilder) { }
  soumettre(){}

  ngOnInit(): void {
  }

}
