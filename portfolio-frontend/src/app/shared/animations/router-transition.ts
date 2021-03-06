import { transition, trigger, style, query, animate } from '@angular/animations';
// Router animation, fade in and out.
// --------------------------------------------------------------- //

export const routerTransition =
  trigger('routeTransition', [
    transition('* <=> *', [
      query(
        ':enter, :leave',
        [style({
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
        })],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.8s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.8s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);

