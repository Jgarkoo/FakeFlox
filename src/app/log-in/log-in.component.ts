import { NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, NgStyle],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{
  
  signIn: boolean = false;

  authForm = new FormGroup({
    name: new FormControl(''), 
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
    confirmPassword: new FormControl('')  
  })

  constructor(){}

  ngOnInit(): void {
    this.toggleValidators(); 
  }

  toggleForm() {
    this.signIn = !this.signIn;
    this.toggleValidators();
  }

  private toggleValidators() {
    if (this.signIn) {
      this.authForm.get('name')?.clearValidators();
      this.authForm.get('confirmPassword')?.clearValidators();
      this.authForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.authForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    } else {
      this.authForm.get('name')?.setValidators([Validators.required]);
      this.authForm.get('confirmPassword')?.setValidators([Validators.required, Validators.minLength(6)]);
      this.authForm.get('email')?.setValidators([Validators.required, Validators.email]);
      this.authForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
    }
    this.authForm.updateValueAndValidity();  
  }

  get email(){
    return this.authForm.controls['email'];
  }

  get password(){
    return this.authForm.controls['password'];
  }
}
