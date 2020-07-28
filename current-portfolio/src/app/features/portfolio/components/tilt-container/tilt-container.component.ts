// angular
import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy, Output, EventEmitter, NgZone } from '@angular/core';

// models
import { Mouse } from '../../models';

// rxjs
import { Observable, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
/* --------------------------------------------------------------------------------- */

@Component({
  selector: 'app-tilt-container',
  templateUrl: './tilt-container.component.html',
  styleUrls: ['./tilt-container.component.css']
})
export class TiltContainerComponent implements OnInit, OnDestroy {

  /* Element References */
  @ViewChild('container', {static: true}) private container: ElementRef;
  @ViewChild('inner', {static: true}) private inner: ElementRef;

  /* Inputs */
  @Input() updateRate: number = 10;
  @Input() transitionDuration: string = '400ms';
  @Input() perspectiveValue: string = '40px';

  /* Outputs */
  @Output() mouseEnter = new EventEmitter<any>();
  @Output() mouseLeave = new EventEmitter<any>();
  @Output() mouseMove = new EventEmitter<any>();

  /* Logic properties */
  private counter = 0;
  private mouse: Mouse = new Mouse;

  /* Misc properties */
  private eventOptions: boolean | { capture: boolean, passive: boolean };
  private unsubscriber = new Subject<any>();

  /* Observables */
  public onMouseMove$: Observable<MouseEvent>;
  public onMouseEnter$: Observable<MouseEvent>;
  public onMouseLeave$: Observable<MouseEvent>;

  constructor() { }

  ngOnInit(): void {
    /* Set initial styles for container */
    this.setInitalStyles();

    /* Observables from event listeners */
    this.onMouseMove$ = fromEvent(this.inner.nativeElement, 'mousemove');
    this.onMouseEnter$ = fromEvent(this.inner.nativeElement, 'mouseenter');
    this.onMouseLeave$ = fromEvent(this.inner.nativeElement, 'mouseleave');

    /* Subscriptions that emit events on output */
    this.onMouseMove$.pipe(takeUntil(this.unsubscriber)).subscribe(() => this.mouseMove.emit());
    this.onMouseEnter$.pipe(takeUntil(this.unsubscriber)).subscribe(() => this.mouseEnter.emit());
    this.onMouseLeave$.pipe(takeUntil(this.unsubscriber)).subscribe(() => this.mouseLeave.emit());
  }

  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.unsubscribe();
  }

  /* Event Handlers */
  public onMouseEnterHandler($event: MouseEvent) {
    this.update($event);
  }
  public onMouseLeaveHandler($event: MouseEvent) {
    this.updateTransformStyle('0', '0');
  }
  public onMouseMoveHandler($event: MouseEvent) {
    if (this.isTimeToUpdate()) {
      this.update($event);
    }
  }

  /* Updates mouse class + DOM elements styles */
  private update($event: MouseEvent) {
    const inner = this.inner.nativeElement;

    this.mouse.updatePosition($event, inner);

    // Calculation to turn user mouse position / element size to
    // floating point number used for degrees of rotation on that axis
    this.updateTransformStyle(
      (this.mouse.y / inner.offsetHeight / 2).toFixed(2),
      (this.mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  }

  /* Determines if user mouse movement should update container */
  private isTimeToUpdate() {
    return this.counter++ % this.updateRate === 0;
  }

  /* Updates rotation style of the inner container */
  private updateTransformStyle(x: string, y: string) {
    const inner = this.inner.nativeElement;
    const style = `rotateX(${x}deg) rotateY(${y}deg)`;

    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  }

  /* Set styles from inputs */
  private setInitalStyles() {
    const inner = this.inner.nativeElement;
    const container = this.container.nativeElement;

    container.style.perspective = `${this.perspectiveValue}`;
    container.style.webkitPerspective = `${this.perspectiveValue}`;
    container.style.mozPerspective = `${this.perspectiveValue}`;
    container.style.msPerspective = `${this.perspectiveValue}`;
    container.style.oPerspective = `${this.perspectiveValue}`;

    inner.style.transition = `${this.transitionDuration} transform`;
    inner.style.webkitTransition = `${this.transitionDuration} transform`;
    inner.style.mozTransition = `${this.transitionDuration} transform`;
    inner.style.msTransition = `${this.transitionDuration} transform`;
    inner.style.oTransition = `${this.transitionDuration} transform`;
  }

}
