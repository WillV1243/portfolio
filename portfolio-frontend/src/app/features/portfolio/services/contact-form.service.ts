// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/* --------------------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private apiUrl = '/api/ContactForm';

  constructor(private http: HttpClient) { }

  postContactForm(formValue: any): Observable<any> {
    return this.http.post(this.apiUrl, formValue).pipe(
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
