import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

// Basic
export const routerTransition =
  trigger('routerTransition', [
    transition('UserListPage <=> UserCreatePage', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),

    transition('* => UserListPage', slideTo('right')),
    transition('UserListPage => UserDetailPage', slideTo('left')),
    transition('*  => CategoryListPage', translateTo({ x: 0, y: -1000, rotate: 0 })),
    transition('*  => AppointmentListPage', translateTo({ x: 1000, y: 0, rotate: 150 })),
    transition('*  => ProfilePage', translateTo({ x: 1000, y: 0, rotate: -150 })),
  ]);



// Positioned
export const slider =
  trigger('routeAnimations', [
    transition('* => UserListPage', slideTo('left')),
    transition('* => UserDetailPage', slideTo('right')),
    transition('UserDetailPage => *', slideTo('left')),
    transition('UserListPage => *', slideTo('right')),

  ]);


export const transformer =
  trigger('routeAnimations', [
    transition('* => isLeft', translateTo({ x: -100, y: -100, rotate: -720 })),
    transition('* => isRight', translateTo({ x: 100, y: -100, rotate: 90 })),
    transition('isRight => *', translateTo({ x: -100, y: -100, rotate: 360 })),
    transition('isLeft => *', translateTo({ x: 100, y: -100, rotate: -360 }))
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '10%',
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%' }))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
function translateTo({ x = 100, y = 0, rotate = 0 }) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` })
    ]),
    group([
      query(':leave', [
        animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` }))
      ], optional),
      query(':enter', [
        animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)` }))
      ])
    ]),
  ];
}


// Keyframes

export const stepper =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
        }),
      ]),
      group([
        query(':enter', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
            style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ]),
        query(':leave', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
            style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
          ])),
        ])
      ]),
    ])

  ]);
