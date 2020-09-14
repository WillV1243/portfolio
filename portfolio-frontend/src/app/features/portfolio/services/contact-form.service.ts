// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

// models
import { ContactForm, ContactFormState, isInstanceOfContactFormState } from '../models';

// services
import { AppInitService } from 'src/app/core/services';
/* --------------------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private apiUrl: string = this.appInitService.appConfig.apiUrl;

  private initialState: ContactFormState = {
    loading: false,
    loaded: true,
    formSubmitted: false,
    response: null,
    error: null
  };

  // Contact form state
  private ContactState = new BehaviorSubject<ContactFormState>({ ...this.initialState });

  // Get current state value
  private get contactState() {
    return this.ContactState.getValue();
  }
  // Change state
  private set contactState(state: ContactFormState) {
    this.ContactState.next({ ...state });
    console.log('%c State change:', 'color: red', state);
  }

  // State property observables
  public getContactLoading$: Observable<boolean> = this.getContactProperty('loading');
  public getContactLoaded$: Observable<boolean> = this.getContactProperty('loaded');
  public getFormSubmitted$: Observable<boolean> = this.getContactProperty('formSubmitted');
  public getContactResponse$: Observable<any> = this.getContactProperty('response');
  public getContactError$: Observable<any> = this.getContactProperty('error');

  constructor(
    private http: HttpClient,
    private appInitService: AppInitService
  ) { }

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
    if (!isInstanceOfContactFormState(value)) throw({ message: `setContactState 'value' !== ContactFormState`, value });

    this.contactState = value;
  }

  // Reset state
  public resetContactState() {
    this.contactState = this.initialState;
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
