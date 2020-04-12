import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myFormModel: FormGroup;
  constructor() {
    this.myFormModel = new FormGroup({
      username: new FormControl(''),
      ssn: new FormControl(''),
      passwordsGroup: new FormGroup({
        password: new FormControl(''),
        pconfirm: new FormControl('')
      }),
      dateRange: new FormGroup({
        from: new FormControl(''),
        to: new FormControl('')
      })
    })
  }
  onSubmit() {
    console.log('Form submitted...');
    console.log(this.myFormModel);
  }
}
