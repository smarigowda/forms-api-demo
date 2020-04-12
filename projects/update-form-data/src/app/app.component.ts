import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myFormModel: FormGroup;
  // constructor() {
  //   this.myFormModel = new FormGroup({
  //     id: new FormControl(''),
  //     description: new FormControl(''),
  //     seller: new FormControl('')
  //   });
  // }
  constructor(fb: FormBuilder) {
    this.myFormModel = fb.group({
      id: [''],
      description: [''],
      seller: ['']
    });
  }
  updateEntireForm() {   
    this.myFormModel.setValue({
      id: 123,
      description: 'A great product',
      seller: 'XYZ Corp'
    });
  }
  updatePartOfTheForm() {
    this.myFormModel.patchValue({
      description: 'New Improved version...'
    })
  }
}
