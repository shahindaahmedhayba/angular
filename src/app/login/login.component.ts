import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    const { username, password } = this.loginForm.value;

    this.AuthService.login(username, password).subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/profile']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
