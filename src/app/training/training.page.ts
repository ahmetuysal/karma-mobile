import { Component, OnInit } from '@angular/core';
import { Training } from 'src/contract'
@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  Trainings: Training[];
  constructor() { }

  ngOnInit() {
    this.Trainings = [
      {
        title: 'İş Güvenliği-1',
        duration: '2,5 dk',
        checked: true,
      },
      {
        title: 'İş Güvenliği-2',
        duration: '2,5 dk',
        checked: false,
      },
      {
        title: 'Forklift Kullanımı',
        duration: '3 dk',
        checked: false,
      }
    ]
  }

}
