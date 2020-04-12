import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SSNValidatorService } from './shared/ssn.validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(fb: FormBuilder, ssnValidatorService: SSNValidatorService) {
    this.myForm = fb.group({
      ssnControl: ['', this.ssnValidator, ssnValidatorService.checkWorkAuthorisation.bind(ssnValidatorService)]
    })
  }

  ssnValidator(control: FormControl): { [key: string]: any } {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : { ssn: true };
  }
}
