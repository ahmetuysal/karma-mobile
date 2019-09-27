import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupRequest } from '../../contract';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$')
        ]
      }),
      lastName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$')
        ]
      }),
      tckn: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      city: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(255)]
      }),
      phone: new FormControl('', { validators: [Validators.required] }),
      username: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9\\-]+$'),
          Validators.maxLength(20)
        ]
      }),
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async submit() {
    if (this.credentials.invalid) {
      return;
    }
    const signupRequest = new SignupRequest();

    const name = this.credentials.controls.name.value.trim();
    const indexSpace = name.indexOf(' ');

    const firstName = indexSpace !== -1 ? name.substring(0, indexSpace) : name;

    signupRequest.email = this.credentials.controls.email.value.trim();
    signupRequest.username = this.credentials.controls.username.value.trim();
    signupRequest.password = this.credentials.controls.password.value.trim();
    signupRequest.firstName = firstName;
    signupRequest.lastName = this.credentials.controls.lastName.value.trim();
    if (indexSpace !== -1) {
      signupRequest.middleName = name.substring(indexSpace + 1);
    }

    signupRequest.TCKN = this.credentials.controls.tckn.value;
    signupRequest.city = this.credentials.controls.city.value.trim();
    signupRequest.phone = this.credentials.controls.phone.value.trim();

    const success = await this.authService.attemptSignup(signupRequest);

    if (success) {
      this.router.navigateByUrl('/login');
    }
  }
}
