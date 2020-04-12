import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable()
export class SSNValidatorService {
    checkWorkAuthorisation(field: AbstractControl): Observable<ValidationErrors | null> {
        return of(field.value.indexOf('123') >= 0 ? null : { work: 'You are not authorised to work! Sorry' });
    }
}