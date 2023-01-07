import { animate, animateChild, group, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";

export const slider =
    trigger('routeAnimations',[
        transition('* => isRight', slideTo('right'))
    ]);

    export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
          query(':enter', style({
             opacity: 0.2,
             
             transform:'scale(0) translateX(100%)'
            }),
             { optional: true }),
          query(':enter', stagger('650ms', [
            animate('600ms ease', keyframes([
              style({ opacity: .4,transform:'scale(1) translateX(0)', offest: 0}),
              style({ opacity: .8, transform:'scale(1) translateX(100px)', offest: .3}),
              style({ opacity: 1, transform:'scale(1) translateX(600px)', offest: 1})
            ]))
          ]), {optional: true}),
        ])
      ])



export const fader =
    trigger('routeAnimations',[
        transition('* <=> *',[
            query(':enter,:leave',[
                style({
                    position:'absolute',
                    left:0,
                    width:'100%',
                    opacity:0,
                    transform:'scale(0) translateX(100%)',
                })
            ]),
            query(':enter',[
                animate('600ms ease',
                    style({opacity:1,transform:'scale(1) translateX(0)'})
                )
            ])
        ])
    ]
)

function slideTo(direction){
    const optional = {optional:true};
    return [
        query(':enter,:leave',[
            style({
                position:'absolute',
                top:0,
                [direction]:0,
                witdth:'100%'
            })
        ],optional),
        query(':enter', [
            style({[direction]:'-100%'})
        ]),
        group([
            query(':leave',[])
        ])
    ];
}
