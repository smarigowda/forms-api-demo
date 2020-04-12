import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myFormModel: FormGroup;
  countryControl: FormControl;
  phoneControl: FormControl;
  constructor(fb: FormBuilder) {
    this.myFormModel = fb.group({
      country: [''],
      phone: ['']
    });
  }
  onSubmit() {
    console.log('submit clicked...!');
  }
  ngOnInit() {
    this.countryControl = this.myFormModel.get('country') as FormControl;
    this.phoneControl = this.myFormModel.get('phone') as FormControl;

    this.countryControl.valueChanges.subscribe(country => {
      console.log(country);
      if(country === 'USA') {
        this.phoneControl.setValidators([Validators.minLength(10)]);
      } else {
        this.phoneControl.setValidators([Validators.minLength(11)]);
      }
      this.phoneControl.updateValueAndValidity();
    })
  }
}
