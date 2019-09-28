import { Component, OnInit } from '@angular/core';
import { Prize } from 'src/contract';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage implements OnInit {
  featuredPrizes: Prize[];
  newPrizes: Prize[];
  popularPrizes: Prize[];

  constructor() {}

  ngOnInit() {
    this.newPrizes = [
      {
        title: 'Office Eğitim Programı',
        detail: '2 günlük Microsoft office eğitim programı',
        price: 1500,
        image: '../../assets/market_resimleri/4.a.microsoft_egitimi.jpg',
        progress: 0.5
      },
      {
        title: 'Masaj Kuponu',
        detail: '',
        price: 34,
        image: '../../assets/market_resimleri/4.b.Kişisel_Gelişim_Zirvesi.jpg',
        progress: 0.1
      },
      {
        title: 'Esnek İzin Günü',
        detail: 'Haftalık izin gününü sen belirle.',
        price: 60,
        image: '../../assets/market_resimleri/4.b.Kişisel_Gelişim_Zirvesi.jpg',
        progress: 0.3,
        quests: [
          {
            title: 'İstikrar',
            detail: 'Bir hafta boyunca günlük hedefinin altında düşme.',
            isCompleted: true
          },
          {
            title: 'Cana yakın',
            detail: '30 günaydın mesajı yolla.',
            isCompleted: false
          }
        ]
      },
      {
        title: 'Uludağ Kayak Tatili',
        detail: 'Uludağda ailenizle birlikte rüya gibi bir hafta geçirin.',
        price: 400,
        image: '../../assets/market_resimleri/4.b.Kişisel_Gelişim_Zirvesi.jpg',
        progress: 0.1
      }
    ];
    this.popularPrizes = [
      {
        title: 'Sinema Bileti',
        detail: 'Bütün Çiçek Sinemalarında geçerlidir.',
        price: 140,
        image: '../../assets/market_resimleri/1.Sinema_Bileti.jpg',
        progress: 0.6
      },
      {
        title: 'Alışveriş Çeki',
        detail: 'Modanisa’da geçerli 30 TL değerinde para puan.',
        price: 180,
        image: '../../assets/market_resimleri/2.alisveris_ceki.jpg',
        progress: 0.8
      },
      {
        title: 'Market Kuponu',
        detail: 'Şok Marketler’de geçerli 50 tl değerinde para puan.',
        price: 300,
        image: '../../assets/market_resimleri/3.Market_kuponu.jpg',
        progress: 0.75
      },
      {
        title: 'Esnek İzin Günü',
        detail: 'Haftalık izin gününü sen belirle.',
        price: 60,
        image: '../../assets/market_resimleri/4.b.Kişisel_Gelişim_Zirvesi.jpg',
        progress: 0.1,
        quests: [
          {
            title: 'İstikrar',
            detail: 'Bir hafta boyunca günlük hedefinin altında düşme.',
            isCompleted: true
          },
          {
            title: 'Cana yakın',
            detail: '30 günaydın mesajı yolla.',
            isCompleted: false
          }
        ]
      },
      {
        title: 'Uludağ Kayak Tatili',
        detail: 'Uludağda ailenizle birlikte rüya gibi bir hafta geçirin.',
        price: 400,
        image: '../../assets/market_resimleri/4.b.Kişisel_Gelişim_Zirvesi.jpg',
        progress: 0.1
      }
    ];
  }
}
