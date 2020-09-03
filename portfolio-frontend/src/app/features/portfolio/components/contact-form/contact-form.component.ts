// angular
import { Component, OnInit } from '@angular/core';

// reactive forms
import { FormBuilder, Validators } from '@angular/forms';

// services
import { ContactFormService } from '../../services';

// animations
import { fade } from 'src/app/shared/animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [fade]
})
export class ContactFormComponent implements OnInit {

  public contactForm = this.fb.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.maxLength(4000)]]
  });

  public get name() { return this.contactForm.controls.name }
  public get company() { return this.contactForm.controls.company }
  public get email() { return this.contactForm.controls.email }
  public get message() { return this.contactForm.controls.message }

  constructor(
    private fb: FormBuilder,
    private contactFormService: ContactFormService
  ) { }

  ngOnInit() {
  }

  submitContactForm(formValue: any) {
    console.log({ formValue });
    this.contactFormService.postContactForm(formValue).subscribe();
  }

}
