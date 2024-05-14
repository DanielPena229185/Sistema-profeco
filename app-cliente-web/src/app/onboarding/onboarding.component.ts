import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { PersonalInfoForm, ProfileInfoForm } from './onboarding.types';
import { Router } from '@angular/router';
import { authGuard } from '../share/services/auth.guard.service';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent {
  personalInfoForm: FormGroup;
  personalInfoSaved: PersonalInfoForm;
  profileInfoSaved: ProfileInfoForm;

  constructor(
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.buildPersonalInfoForm();
  }

  ngOnDestroy() {}

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
    return true;
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  confirm() {
    if (this.createPersonalInfoFromForm() && authGuard) {
      this.router.navigateByUrl('/inicio');
    }
    //Send data to the server
    //this.profileInfoSaved
    //this.personalInfoSaved
  }
}
