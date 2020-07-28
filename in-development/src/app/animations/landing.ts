import { trigger, transition, style, animate, state, query } from '@angular/animations';
// Hero link text show/hide animation
// --------------------------------------------------------------- //

export const landingAnimation = [
  trigger('landingAnimation', [
    transition('* <=> *', [
      style({ opacity: 0, transform: 'scale(1.1, 1.1)', overflow: 'hidden' }),
      query('*', style({ width: '100%', height: '100%', overflow: 'hidden' })),
      animate('5s', style({ opacity: 1, transform: 'none' })),
    ])
  ])
];
