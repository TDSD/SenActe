import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-declaration-mariage',
  templateUrl: './declaration-mariage.component.html',
  styleUrls: ['./declaration-mariage.component.scss']
})
export class DeclarationMariageComponent implements OnInit {
  ok : boolean;
  declarationMariageForm = this.fb.group({
    numeroRegistre: ['', [Validators.required,Validators.minLength(1)]],
    anneeActe: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4)]],
    nomOfficier:['',[Validators.required]],
    prenomOfficier:['',[Validators.required]],
    nomMr:['',[Validators.required]],
    prenomMr:['',[Validators.required]],
    professionMr:['',[Validators.required]],
    dateNaissMr:['',[Validators.required]],
    lieuNaissMr:['',[Validators.required]],
    domicleMr:['',[Validators.required]],
    nomPrenomPereMr:['',[Validators.required]],
    nomPrenomMereMr:['',[Validators.required]],
    nomMme:['',[Validators.required]],
    prenomMme:['',[Validators.required]],
    professionMme:['',[Validators.required]],
    dateNaissMme:['',[Validators.required]],
    lieuNaissMme:['',[Validators.required]],
    domicleMme:['',[Validators.required]],
    nomPrenomPereMme:['',[Validators.required]],
    nomPrenomMereMme:['',[Validators.required]],
    dateMariageCoutume:['',[Validators.required]],
    lieuMariageCoutume:['',[Validators.required]],
    prixDote:['',[Validators.required]],
    typeBien:['',[Validators.required]],
    
  });
  declarerFormNaiss = this.fb.group({
    
  });

  addMariage(){
    
  }
  constructor(private fb : FormBuilder) { }
  soumettre(){
    this.ok = true;
  }

  ngOnInit(): void {
  }

}
