import { Component, OnInit } from '@angular/core';
import { Notification, NotificationType } from '../../contract';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss']
})
export class NotificationsPage implements OnInit {
  data: UINotification[];

  constructor() {
    this.data = [
      {
        date: new Date(),
        title: 'Ustalığa terfi ettin!',
        text: 'Köyüne haber sal.',
        image: '../../assets/ercan_altug_yilmaz_kafa.png',
        type: NotificationType.System,
        isToggled: false
      },
      {
        date: new Date(),
        title: 'Yeni pozisyonun için tebrik ederim!',
        text: 'Gül Polat seni kutladı',
        type: NotificationType.Coworker,
        isToggled: false
      },
      {
        date: new Date(),
        image: '../../assets/musteri.jpg',
        title:
          'Ürün güzel paketlenmişti. Çok yakıştı. Emeği gelen herkese teşekkürler',
        text: 'Müşteri teşekkürü',
        type: NotificationType.Customer,
        isToggled: false
      },
      {
        date: new Date(),
        image: '../../assets/kafalar/kafa_10.png',
        title:
          'Hasan Canlı Modanisa’daki 2. yılını kutluyor! Ona iyi dileklerini iletmek için tıkla.',
        text: 'Modanisa bildirimi',
        type: NotificationType.System,
        isToggled: false
      },
      {
        date: new Date(),
        title: 'Ürünüm zamanında elime ulaştı. Teşekkürler Modanisa!',
        text: 'Müşteri teşekkürü',
        type: NotificationType.Customer,
        isToggled: false
      },
      {
        date: new Date(),
        title: 'Bu haftaki hedefini aşan Karanfil takımını tebrik ederim.',
        text: 'Yönetici tebriği',
        type: NotificationType.Supervisor,
        isToggled: false
      },
      {
        date: new Date(),
        title: 'Tebrikler çaylak, bir sonraki lige çok yaklaştın, hadi! ',
        text: 'Modanisa bildirimi',
        type: NotificationType.System,
        isToggled: false
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

  toggleExpand(uiNotification: UINotification) {
    uiNotification.isToggled = !uiNotification.isToggled;
  }
}

class UINotification extends Notification {
  isToggled = false;
}
