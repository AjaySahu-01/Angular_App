import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  type:string="password";
  istext:boolean=false;
  eyeIcon:string="fa-eye-slash";
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password:['',Validators.required]
    });
  }
  Pass(){
    this.istext=!this.istext;
    this.istext ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.istext ?this.type="text":this.type="password";
  }
  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.auth.Signup(this.signupForm.value).subscribe({
        next: (res => {
          alert(res.message)
        })
      })
      this.signupForm.reset();
      this.router.navigate(['login']);
    }
    else {

      this.validateAllFormFileds(this.signupForm);
      alert("Fail To Sign Up!");

    }
  }
  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFileds(control)
      }
    })
  }
}

