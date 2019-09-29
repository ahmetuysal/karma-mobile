import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmotionPage } from '../emotion/emotion.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('hello');
      const modal = this.modalController.create({
        component: EmotionPage
      });
      return modal.then(m => m.present());
    });
  }
}
