import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { LoginRequest } from '../../contract';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) {
    if (this.authService.hasCurrentUser()) {
      this.router.navigate(['/tabs']);
    }
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      identifier: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
  }

  async submit() {
    if (this.credentials.invalid) {
      return;
    }

    const loginRequest = new LoginRequest();
    loginRequest.identifier = this.credentials.value.identifier;
    loginRequest.password = this.credentials.value.password;

    const success = await this.authService.attemptAuth(loginRequest);

    if (success) {
      this.router.navigate(['/tabs']);
    }
  }
}
