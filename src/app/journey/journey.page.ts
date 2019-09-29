import { Component, OnInit } from '@angular/core';
import { Step } from 'src/contract';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
})
export class JourneyPage implements OnInit {
  Steps: Step[];
  constructor() { }

  ngOnInit() {
    this.Steps= [
      {
        title: 'Altuğ paketleme canavarı olarak Modanisa\'da çalışmaya başladı.',
        completed: true,
        logo: 'magnet',
        progress: 1/12,
      },
      {
        title: 'Altuğ Piksel Olimpiyatlarına kayıt oldu.',
        completed: true,
        logo: 'save',
        progress: 2/12,
      },
      {
        title: 'Altuğ efsanesiyle tanıştı.',
        completed: true,
        logo: 'bonfire',
        progress: 4/12,
      },
      {
        title: 'Altuğ macerasına devam edecek.',
        completed: false,
        logo: 'train',
        progress: 4/12,
      }
      
    ]
  }

}
