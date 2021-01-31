import { Image } from './image.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [ 
    trigger('banner', [
      state('escondido', style({
        opacity: 0  
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponentComponent implements OnInit {

  public estado: string = 'visivel';
  
  public images: Image[] = [
    { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' }
  ];

  constructor() { }

  ngOnInit(): void { 
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  public logicaRotacao(): void {
    let idx: number = 0;

    for(let i: number = 0; i <= 4; i++)  {
      if (this.images[i].estado === 'visivel') {
        this.images[i].estado = 'escondido';
        idx = i === 4 ? 0 : i + 1;
        break;
      }
    }

    this.images[idx].estado = 'visivel';

    setTimeout(() => this.logicaRotacao(), 3000);
  }

}
