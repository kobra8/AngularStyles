import { trigger, state, style, transition, animate, animation, useAnimation } from "@angular/animations";

//Definicja reużywalnej animacji
const fadeAnimation = animation([
    style({
        opacity: '{{ startOpacity }}'
    }),
    animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '100ms'}})

// Poniższe animacje to animacje komponentu children w stosunku do routerOutlet
// wykonują się tylko, jeżeli w rodzicu wpisano funkcję animateChild(), lub jeżeli w rodzicu nie ma
// żadnych animacji
export const routeFadeStateTrigger = (params) => trigger('routeFadeState', [
    transition(':enter', [
        //Definicja stylu reużywalnej animacji
        useAnimation(fadeAnimation, {params: params})
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