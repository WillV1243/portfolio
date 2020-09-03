// angular
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'drk-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css', '../../component-lib-style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  @Input() public size: 'small' | 'medium' | 'large' | 'max' = 'medium';

  @ViewChild('title', { static: true }) private title: ElementRef;

  ngOnInit() {
    const title = this.title.nativeElement;

    title.className += this.inputErrorCheck(this.size) ? ` drk-${this.size}` : ' drk-medium';
  }

  // ERRORS CHECKS

  // Throws error size input is does not match specified strings; true = no error
  private inputErrorCheck(size: string) {
    if (size && size.length === 0) {
      if (this.size.search(/small|medium|large|max/i) === -1) {
        return false;
      } else {
        return true;
      }
    }
  }

}
