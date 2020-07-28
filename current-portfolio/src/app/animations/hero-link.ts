import { trigger, transition, style, animate, state } from '@angular/animations';
// Hero link text show/hide animation
// --------------------------------------------------------------- //

export const heroTextShowHide =
  trigger(
    'heroTextShowHide', [
      state('active', style({ width: '*', opacity: 1 })),
      transition(
        ':enter', [
          style({ width: 0, opacity: 0 }),
          animate('250ms')
        ]
      ),
      transition(
        ':leave', [
          animate('250ms', style({ width: 0, opacity: 0 }))
        ]
      )
    ]
  );