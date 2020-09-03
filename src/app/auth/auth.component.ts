import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authenticationError = false;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [false],
  });

  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(): void {
  }

  register(): void {
    this.router.navigate(['/register']);
  }

  requestResetPassword(): void {
  }

}





