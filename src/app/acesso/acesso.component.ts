import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity:1 
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(-120px, -50px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity:1 
      })),
      transition('void => criado', [
        style({opacity: 0, transform: 'translate(120px, 50px)'}),
        animate('1.5s 0s ease-in-out', keyframes([
          style({offset: 0.15, opacity: 1, transform: 'translateX(0)'}),
          style({offset: 0.86, opacity: 1, transform: 'translateX(0)'}),
          style({offset: 0.88, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.90, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.91, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.94, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 1, opacity: 1, transform: 'translateX(0)'})
        ]))
      ])
    ])  
  ]
})
export class AcessoComponentComponent implements OnInit {

  public estadoBanner: string = 'criado'; 

  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event: string) {
    this.cadastro = event === 'cadastro' ? true : false;
  }

}
