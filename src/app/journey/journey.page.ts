import { Component, OnInit } from '@angular/core';
import { Step } from 'src/contract';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss']
})
export class JourneyPage implements OnInit {
  Steps: Step[];
  constructor(private readonly modalController: ModalController) {}

  ngOnInit() {
    this.Steps = [
      {
        title: "Altuğ paketleme canavarı olarak Modanisa'da çalışmaya başladı.",
        completed: true,
        logo: 'magnet',
        progress: 1
      },
      {
        title: 'Altuğ Piksel Olimpiyatlarına kayıt oldu.',
        completed: true,
        logo: 'save',
        progress: 2 / 12
      },
      {
        title: 'Altuğ efsanesiyle tanıştı.',
        completed: true,
        logo: 'bonfire',
        progress: 4 / 12
      },
      {
        title: 'Altuğ macerasına devam edecek.',
        completed: false,
        logo: 'train',
        progress: 4 / 12
      }
    ];
  }

  back() {
    this.modalController.dismiss();
  }
}
