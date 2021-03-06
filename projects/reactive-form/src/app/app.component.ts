import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, NgForm } from '@angular/forms';

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
      socialSecurity: new FormControl('', this.ssnValidator),
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
  ssnValidator(control: FormControl): ValidationErrors | null {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssn: { description: 'SSN should have 9 digits...' } };
  }
}
