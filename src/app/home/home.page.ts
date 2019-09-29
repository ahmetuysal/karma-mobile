import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmotionPage } from '../emotion/emotion.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild('balloon', { static: false }) balloon: ElementRef<HTMLDivElement>;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    const modal = this.modalController.create({
      component: EmotionPage
    });
    setTimeout(() => {
      return modal.then(m => {
        m.present();
        m.onWillDismiss().then(result => {
          console.log(result);
          const feeling = result.data.feeling || 'Köyde havalar çok güzel!';
          this.balloon.nativeElement.innerText = feeling;
        });
      });
    }, 2000);
  }
}
