// angular
import { Component } from '@angular/core';

// reactive forms
import { FormBuilder, Validators } from '@angular/forms';

// services
import { ContactFormService } from '../../services';
import { AppInitService } from 'src/app/core/services';

// animations
import { fade } from 'src/app/shared/animations';

// rxjs
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

// models
import { ContactFormState } from '../../models';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [fade]
})
export class ContactFormComponent {

  public siteKey = this.appInitService.appConfig.recaptchaSiteKey;

  public loading$: Observable<boolean> = this.contactFormService.getContactLoading$;
  public loaded$: Observable<boolean> = this.contactFormService.getContactLoaded$;
  public error$: Observable<any> = this.contactFormService.getContactError$;

  public contactForm = this.fb.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(4000)]],
    recaptcha: [null, [Validators.required]]
  });

  public get name() { return this.contactForm.controls.name }
  public get company() { return this.contactForm.controls.company }
  public get email() { return this.contactForm.controls.email }
  public get message() { return this.contactForm.controls.message }
  public get recaptcha() { return this.contactForm.controls.recaptcha }

  constructor(
    private fb: FormBuilder,
    private contactFormService: ContactFormService,
    private appInitService: AppInitService
  ) { }

  submitContactForm(formValue: any) {
    let state: ContactFormState = {
      loading: true,
      loaded: false,
      formSubmitted: false,
      response: null,
      error: null
    };
    this.contactFormService.setContactState(state);

    this.contactFormService.postContactForm(formValue).pipe(
      catchError(error => {
        state = {
          loading: false,
          loaded: true,
          formSubmitted: true,
          response: null,
          error
        }
        this.contactFormService.setContactState(state);
        return throwError(error);
      })
    ).subscribe(response => {
      state = {
        loading: false,
        loaded: true,
        formSubmitted: true,
        response,
        error: null
      }
      this.contactFormService.setContactState(state);
    });
  }

}
