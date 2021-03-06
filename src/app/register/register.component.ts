import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorCreate : boolean;
  success : boolean;
  

  registerForm = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    cfpassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    dateNaiss: ['', [Validators.required]],
    lieuNaiss: ['', [Validators.required]],
    numRegistre: ['', [Validators.required]],
    numTel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    adresse: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  create(): void {
    const lieuNaiss = this.registerForm.get(['lieuNaiss'])!.value; 
    if (lieuNaiss == "Fouta") {
      this.errorCreate = true;
      this.success = false;
    }else {
      this.success = true;
      this.errorCreate = false;
    }
  }


  ngOnInit(): void {
  }

}
