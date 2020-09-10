// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

// models
import { ContactForm, ContactFormState, isInstanceOfContactFormState, contactStateProperyCheck } from '../models';
/* --------------------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private apiUrl = '/api/';

  // Contact form state
  private ContactState = new BehaviorSubject<ContactFormState>({
    loading: false,
    loaded: true,
    response: null,
    error: null
  });

  // Get current state value
  private get contactState() {
    return this.ContactState.getValue();
  }
  // Change state
  private set contactState(state: ContactFormState) {
    console.log(state);
    this.ContactState.next({ ...state });
  }

  // State property observables
  public getContactLoading$: Observable<boolean> = this.getContactProperty('loading');
  public getContactLoaded$: Observable<boolean> = this.getContactProperty('loaded');
  public getContactError$: Observable<any> = this.getContactProperty('error');

  constructor(private http: HttpClient) { }

  /* --------------- STATE MANAGEMENT --------------- */
  // Get entire state
  private getContactState(): Observable<ContactFormState> {
    return this.ContactState.asObservable();
  }
  // Get property within state
  private getContactProperty(propertyName: string): Observable<boolean> {
    return this.getContactState().pipe(
      map(state => state[propertyName])
    );
  }

  // Change whole state
  public setContactState(value: ContactFormState) {
    if (!isInstanceOfContactFormState(value)) {
      throw({ message: `setContactState "value" !== ContactFormState`, value });
    }

    this.contactState = value;
  }
  // Change state property
  public setContactStateProperty(propertyName: string, value: any) {
    if (!contactStateProperyCheck(propertyName)) {
      throw({ message: `setContactStateProperty "propertyName" !== a property name of ContactFormState`, propertyName });
    }

    const previousState: ContactFormState = this.contactState;
    const newState: ContactFormState = {
      ...previousState,
      [propertyName]: value
    }

    this.contactState = newState;
  }
  /* ------------------------------------------------ */

  // POST contact form http request
  public postContactForm(formValue: ContactForm): Observable<any> {
    return this.http.post(`${this.apiUrl}ContactForm`, formValue).pipe(
      map(res => {
        return res;
      })
    )
  }

}
