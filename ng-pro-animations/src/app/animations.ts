import { state, style, trigger, transition, animate } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
//Void to zdefiniowany stan oznaczający przejście z nie istniejącego elementu
// * oznacza dowolny stan elementu

    // transition('void => *', [
    // style({
    //     opacity: 0
    // }),
    //     animate(300)
    // ]),
    // transition('* => void', animate(300, style({
    //     opacity: 0
    // })))

    //Alternatywny sposób definiowania stanów
    transition(':enter', [
    style({
        opacity: 0
    }),
        animate(300)
    ]),
    transition(':leave', animate(300, style({
        opacity: 0
    })))
]);

export const animateStateTrigger = trigger('animateState', [
    transition('* => *', [
        animate(400, style({
            width: 0
        })),
        animate(400, style({
            //Dynamic dimensional -> width przyjmuje aktualną wartość wynikającą ze stanu animacji
            width: '*'
        }))
    ])
])