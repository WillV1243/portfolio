// angular
import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable, merge } from 'rxjs';
import { map } from 'rxjs/operators';

// services
import { ContactFormService } from '../../services';

// animations
import { fade } from 'src/app/shared/animations';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fade]
})
export class ContactComponent implements OnInit {

  public formComplete$: Observable<boolean> = this.contactFormService.getContactResponse$;
  public formFailed$: Observable<boolean> = this.contactFormService.getContactError$;

  public formInProgress$: Observable<boolean> = this.contactFormService.getFormSubmitted$.pipe(
    map(formSubmitted => !formSubmitted)
  );

  constructor(private contactFormService: ContactFormService) { }

  ngOnInit(): void {
  }

  public resetForm() {
    this.contactFormService.resetContactState();
  }

}
