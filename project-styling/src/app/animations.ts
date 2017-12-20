import { state, style, trigger, transition, animate, group, keyframes } from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
    state('default', style({
        'border-top': '2px solid #eee',
        'border-left': '1px solid #eee',
        backgroundColor: 'transparent',
        padding: '0 20px 20px 20px'
    })),
    state('selected', style({
        border: '2px solid orange',
        backgroundColor: '#caeff9',
        padding: '0 18px 18px 19px'
    })),
    transition('default => selected', [
        style({
            border: '2px solid #eee',
            padding: '0 18px 18px 19px',
            transform: 'scale(1)'
        }),
        animate('400ms ease-out', style({
            transform: 'scale(1.05)'
        })),
        animate(300)
    ]),
    transition('selected => default', [
        style({
            'border-top': '2px solid orange',
            'border-left': '1px solid orange',
            padding: '0 20px 20px 20px'
        }),
        animate('300ms ease-out')
    ])
])

export const slideStateTrigger = trigger('slideState', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out',
            style({
                transform: 'translateY(0)'
            }),
        )]),
    transition(':leave', [
        style({
            transform: 'translateY(0)'
        }),
        animate('300ms ease-out',
            style({
                transform: 'translateY(-100%)'
            }),
        )])
])

export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        animate('500ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                offset: 0
            }),
            //Bump effect
            style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.4
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            })
        ]))
    ]),
    transition(':leave', [
        style({
            transform: 'translateX(0)'
        }),
        animate('300ms ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
    ]),
    // Animacja pozostałych elementów listy przy rozwijaniu New project
    transition('slidUp => slidDown', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(0)'
        }))
    ]),
    transition('slidDown => slidUp', [
        style({
            transform: 'translateY(0)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(-100%)'
        }))
    ])
])

export const buttonStateTrigger = trigger('buttonState', [
    state('invalid', style({
        backgroundColor: 'grey'
    })),
    state('valid', style({
        backgroundColor: 'green',
        borderColor: 'lightGreen'
    })),
    transition('invalid => valid', [
        group([
            animate(100,
                style({
                    transform: 'scale(1.1)'
                })),
            animate(200,
                style({
                    backgroundColor: 'green'
                })),
        ]),
        animate(200,
            style({
                transform: 'scale(1)'
            })),
    ])
])