import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { PersonalInfoForm, ProfileInfoForm } from './onboarding.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent {
  onboardingPage: number = 1;
  personalInfoForm: FormGroup;
  profileInfoForm: FormGroup;
  personalInfoSaved: PersonalInfoForm;
  profileInfoSaved: ProfileInfoForm;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.buildPersonalInfoForm();
    this.buildProfileInfoForm();
  }

  ngOnDestroy() {
  }

  buildPersonalInfoForm() {
    this.personalInfoForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      curp: new FormControl(null, [
        Validators.required,
        Validators.minLength(18),
        Validators.maxLength(18),
        this.validateCURP(),
      ]),
    });
  }

  get name() {
    return this.personalInfoForm.get('name');
  }

  get lastName() {
    return this.personalInfoForm.get('lastName');
  }

  get curp() {
    return this.personalInfoForm.get('curp');
  }

  validateCURP(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const curpRegex = /^[A-Z]{4}[0-9]{6}[A-Z]{7}[0-9]/;
      const curp = control.value;
      if (!curpRegex.test(curp)) {
        return { invalidCURP: { value: curp } };
      }
      return null;
    };
  }

  createPersonalInfoFromForm(): boolean {
    if (this.personalInfoForm.invalid) {
      this.personalInfoForm.markAllAsTouched();
      return false;
    }
    const name = this.name.value;
    const lastName = this.lastName.value;
    const curp = this.curp.value;
    this.personalInfoSaved = { name, lastName, curp };
    console.log('Personal Info Saved:', this.personalInfoSaved);
    return true;
  }

  createProfileInfoFromForm(): boolean {
    if (this.profileInfoForm.invalid) {
      this.profileInfoForm.markAllAsTouched();
      return false;
    }
    const email = this.email.value;
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;
    if (password !== confirmPassword) {
      this.confirmPassword.setErrors({ mismatch: true });
      return false;
    }
    this.profileInfoSaved = { email, password, confirmPassword };
    return true;
  }

  buildProfileInfoForm() {
    this.profileInfoForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    });
  }

  get email() {
    return this.profileInfoForm.get('email');
  }

  get password() {
    return this.profileInfoForm.get('password');
  }

  get confirmPassword() {
    return this.profileInfoForm.get('confirmPassword');
  }

  nextPage() {
    if (this.onboardingPage === 1 && !this.createPersonalInfoFromForm()) {
      return;
    }
    this.onboardingPage++;
  }

  previousPage() {
    this.onboardingPage--;
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  confirm() {
    if (this.createProfileInfoFromForm()) {
      console.log('Profile Info Saved:', this.profileInfoSaved);
    }
    //Send data to the server
    //this.profileInfoSaved
    //this.personalInfoSaved
  }
}
