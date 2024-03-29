import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.page.html',
  styleUrls: ['./emotion.page.scss']
})
export class EmotionPage implements OnInit {
  feeling: string;
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  submit() {
    this.modalController.dismiss({ feeling: this.feeling });
  }
}
