import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';





@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addproductForm!: FormGroup;


  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.addproductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      originalprice: ['', Validators.required],
      sellingprice: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addproductForm.valid) {
      console.log(this.addproductForm.value);
      this.auth.getProduct(this.addproductForm.value).subscribe({
        next: (res => {
          alert(res.message)
        }),
        error: (err => {
          alert(err?.error.message)
        })
      })

    }
    else {

      this.validateAllFormFileds(this.addproductForm);
      alert("Form is Invalid!");

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

