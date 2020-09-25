import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivrer-acte',
  templateUrl: './delivrer-acte.component.html',
  styleUrls: ['./delivrer-acte.component.scss']
})
export class DelivrerActeComponent implements OnInit {
  delivreForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
   
  });
  constructor(private fb: FormBuilder) { }

  send(): void {
  }
  
  ngOnInit(): void {
  }

}
