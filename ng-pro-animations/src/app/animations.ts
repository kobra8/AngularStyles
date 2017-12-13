import { state, style, trigger, transition, animate, group, keyframes } from '@angular/animations';

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
        animate('400ms cubic-bezier(.58,.01,.3,1.03)', style({
            width: 0
        })),
        animate(400, style({
            //Dynamic dimensional -> width przyjmuje aktualną wartość wynikającą ze stanu animacji
            width: '*'
        }))
    ])
])

export const listStateTrigger = trigger('listState', [
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
                opacity: 0,
                backgroundColor: 'white'
            }),
            group([
                animate(1000, style({
                    opacity: 0.7
                })),
                animate('3000ms ease-out', keyframes([
                    style({
                        backgroundColor: 'white',
                        offset: 0
                    }),
                    style({
                        backgroundColor: 'red',
                        offset: 0.3
                    }),
                    style({
                        backgroundColor: 'green',
                        offset: 1
                    }),
                ]))
            ]),
            animate(300, style({
                backgroundColor: 'lightblue'
            }))
        ]),
        transition(':leave', animate(300, style({
            opacity: 0
        })))
    ]);