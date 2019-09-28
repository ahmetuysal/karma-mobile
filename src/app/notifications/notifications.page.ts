import { Component, OnInit } from '@angular/core';
import { Notification, NotificationType } from '../../contract';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage implements OnInit {
  data: Notification[];

  constructor() {
    this.data = [
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Yeni pozisyonun için tebrik ederim!',
        text: 'Gül Polat seni kutladı',
        type: NotificationType.Coworker
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Ürün güzel paketlenmişti. Emeği gelen herkese teşekkürler',
        text: 'Müşteri teşekkürü',
        type: NotificationType.Customer
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title:
          'İrem Canlı Modanisa’daki 2. yılını kutluyor! Ona iyi dileklerini iletmek için tıkla.',
        text: 'Modanisa bildirimi',
        type: NotificationType.System
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Ürünüm zamanında elime ulaştı. Teşekkürler Modanisa!',
        text: 'Müşteri teşekkürü',
        type: NotificationType.Customer
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Bu haftaki hedefini aşan Karanfil takımını tebrik ederim.',
        text: 'Yönetici tebriği',
        type: NotificationType.Supervisor
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Tebrikler çaylak, bir sonraki lige çok yaklaştın, hadi! ',
        text: 'Modanisa bildirimi',
        type: NotificationType.System
      }
    ];
  }

  ngOnInit() {}

  getColor(notification: Notification): string {
    switch (notification.type) {
      case NotificationType.System:
        return 'system';
      case NotificationType.Supervisor:
        return 'supervisor';
      case NotificationType.Coworker:
        return 'coworker';
      case NotificationType.Customer:
        return 'customer';
      default:
        return 'light';
    }
  }

  getIcon(notificationType: NotificationType): string {
    switch (notificationType) {
      case NotificationType.System:
        return 'pulse';
      case NotificationType.Supervisor:
        return 'bowtie';
      case NotificationType.Coworker:
        return 'flame';
      case NotificationType.Customer:
        return 'heart';
      default:
        return 'flame';
    }
  }
}
