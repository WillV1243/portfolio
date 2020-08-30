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

  private apiUrl = 'https://mailthis.to/';

  constructor(private http: HttpClient) { }

  postContactForm(formValue: any): Observable<any> {
    return this.http.post(this.apiUrl, formValue, { responseType: 'text' }).pipe(
      map(res => {
        return res ? res : null;
      }),
      catchError(error => {
        return throwError(error);
        // put error handling here!!
      })
    )
  }
}
