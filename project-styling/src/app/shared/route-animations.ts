import { trigger, state, style, transition, animate } from "@angular/animations";


export const routeFadeStateTrigger = trigger('routeFadeState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(400)
    ]),
    transition(':leave', [
        animate(400), style({
            opacity: 0
        })
    ])
]);

export const routeSlideStateTrigger = trigger('routeSlideState',[
    transition(':enter', [
        style({
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate(300)
    ]),
    transition(':leave', [
        animate(300), style({
            transform: 'translateY(100%)',
            opacity: 0
        })
    ])
])