// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   type: string = "password";
//   istext: boolean = false;
//   eyeicon: string = "fa-eye-slash";
//   signupForm!: FormGroup;

//   constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
//   ngOnInit(): void {
//     this.signupForm = this.fb.group({
//       firstname: ['', Validators.required],
//       lastname: ['', Validators.required],
//       username: ['', Validators.required],
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     })

//   }
//   pass() {
//     this.istext = !this.istext;
//     this.istext ? this.eyeicon = "fa-eye" : this.eyeicon = "fa-eye-slash";
//     this.istext ? this.type = "text" : this.type = "password";
//   }
//   onsubmit() {
//     if (this.signupForm.valid) {
//       this.auth.signup(this.signupForm.value)
//       .subscribe({
//           next: (res => {
//             alert(res.message);
//             this.signupForm.reset();
//             this.router.navigate(['login']);
//           })
//           ,error: (err=> { 
//             alert(err?.error.message) 
//           })
//         })
//     }
//     // console.log(this.signupForm.value);
//   }
//   //   else {
//   // console.log("Form is not valid");
//   // }
// }