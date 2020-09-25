import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authenticationError = false;

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    rememberMe: [false],
  });

  constructor(private router: Router,private fb: FormBuilder, private role: NavbarComponent) { }

  ngOnInit(): void {
  }

  login(): void {
  }
  
  loginto(): void {
    const username = this.loginForm.get(['username'])!.value;
    if(username==='moniquefaye@gmail.com'){
      this.role.role = 'user';
      this.router.navigate(['/demandeur']);
    }
    if(username==='officierdiop@gmail.com'){
      this.role.role = 'admin';
      this.router.navigate(['/home-officier']);
    }
    
  }

  register(): void {
    this.router.navigate(['/register']);
  }

  requestResetPassword(): void {
  }

}





