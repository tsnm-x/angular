import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  
  constructor(private memeber : FormBuilder) { 
    this.registerForm = this.memeber.group({
      nameField: ['',  Validators.required],
      emailField:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      userNameField: ['', [Validators.required, Validators.pattern('^\\S*$')]],
      passwordField: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      confirmPasswordField: ['', Validators.required]
    }, { validators: this.checkPassword })
  }

  ngOnInit(): void {
  }

  checkPassword: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('passwordField')?.value;
    let confirmPass = group.get('confirmPasswordField')?.value;
    
    return pass === confirmPass ? null : { notSame: true }
  }

  get formControls(){
    return this.registerForm.controls;
  }

  submitForm(){
    console.log(this.registerForm);
  }

  get notSameError(){
    return this.registerForm.errors?.['notSame'];
  }


}
