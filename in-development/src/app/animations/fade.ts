import { trigger, transition, style, animate, state } from '@angular/animations';
// Multi-purpose fade in and out animation.
// Used in combination with *ngIf elements.
// --------------------------------------------------------------- //

export const fade =
  trigger(
    'fade', [
      state('active', style({ opacity: 1 })),
      transition(
        ':enter', [
          style({ opacity: 0 }),
          animate('200ms')
        ]
      ),
      transition(
        ':leave', [
          style({ opacity: 1 }),
          animate('200ms', style({ opacity: 0 }))
        ]
      )
    ]
  );
