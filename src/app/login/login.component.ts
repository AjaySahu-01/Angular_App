// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   type: string = "password";
//   istext: boolean = false;
//   eyeicon: string = "fa-eye-slash";
//   loginForm!: FormGroup;

//   constructor(private fb: FormBuilder,private auth:AuthService,private router:Router) { }
//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     })

//   }
//   pass() {
//     this.istext = !this.istext;
//     this.istext ? this.eyeicon = "fa-eye" : this.eyeicon = "fa-eye-slash";
//     this.istext ? this.type = "text" : this.type = "password";
//   }
//   onSubmit() {
//     if (this.loginForm.valid) {
//       console.log(this.loginForm.value)
//       this.auth.login(this.loginForm.value).subscribe({next:(res)=>{alert(res.message);
//       this.router.navigate(['dashboard']);
//     },
//     error:(err)=>{alert(err?.error.message)}})
//     console.log(this.loginForm.value);
//     }
  
//     else {
      
//       this.validateAllFormFileds(this.loginForm);
//       alert("Form is not valid");

//     }
//   }
//   // submit(data: object): void {
//   //   console.warn(data);

//   // }

//   private validateAllFormFileds(formGroup: FormGroup) {

//     Object.keys(formGroup.controls).forEach(field => {

//       const control = formGroup.get(field);

//       if (control instanceof FormControl) {

//         control.markAsDirty({ onlySelf: true });

//       } else if (control instanceof FormGroup) {
//         this.validateAllFormFileds(control)
//       }
//     })
//   }
// }