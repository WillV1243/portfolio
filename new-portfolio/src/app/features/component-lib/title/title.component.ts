// angular
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  Renderer2
} from '@angular/core';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {

  @ViewChild('title', {static: true}) private title: ElementRef;

  @Input() public set size(value: 'small' | 'medium' | 'large' | 'max') {
    // this.title.nativeElement.classList.add(`wv-${value}`);
  };

  ngAfterContentInit() {
    const nodes = this.title.nativeElement.childNodes;

    for (let node of nodes) {
      if (node.nodeType !== Node.TEXT_NODE) {
        throw 'Only text is supported as content in app-title';
      }
    }
  }

}
