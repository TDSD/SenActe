import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-demande-naissance',
  templateUrl: './demande-naissance.component.html',
  styleUrls: ['./demande-naissance.component.scss']
})
export class DemandeNaissanceComponent implements OnInit {
 success : boolean;
  demandeForm = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    dateNaiss: ['', [Validators.required]],
    lieuNaiss: ['', [Validators.required]],
    numRegistre: ['', [Validators.required]],
    numTel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    adresse: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) { }
  create(): void {
    this.success = true;
  }

  ngOnInit(): void {
  }

}
