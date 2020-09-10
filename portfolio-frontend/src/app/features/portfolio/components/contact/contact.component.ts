// angular
import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formComplete$: Observable<boolean>;
  public formFailed$: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

  public resetForm() {

  }

}
