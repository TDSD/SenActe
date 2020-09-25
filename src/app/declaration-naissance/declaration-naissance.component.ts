import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-declaration-naissance',
  templateUrl: './declaration-naissance.component.html',
  styleUrls: ['./declaration-naissance.component.scss']
})
export class DeclarationNaissanceComponent implements OnInit {
  ok : boolean;
  declarerFormNaiss = this.fb.group({
    
  });

  addNaissance(){
    
  }
  constructor(private fb : FormBuilder) { }
  soumettre(){
    this.ok = true;
  }

  ngOnInit(): void {
  }

}
