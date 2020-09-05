// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// models
import { ContactForm, Recaptcha } from '../models';
/* --------------------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private apiUrl = '/api/';

  constructor(private http: HttpClient) { }

  public postContactForm(formValue: ContactForm): Observable<any> {
    return this.http.post(`${this.apiUrl}ContactForm`, formValue).pipe(
      map(res => {
        console.log(res);
        return res;
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }

  public postRecaptcha(recaptcha: Recaptcha): Observable<any> {
    return this.http.post(`${this.apiUrl}ValidateRecaptcha`, recaptcha).pipe(
      map(res => {
        console.log(res);
        return res;
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }

}
