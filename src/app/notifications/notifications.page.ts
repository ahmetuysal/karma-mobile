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
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Mısra Şov Yaptı!',
        text: 'Mısra Şov Yaptı!',
        type: NotificationType.Coworker,
        isToggled: false
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Mısra Şov Yaptı!',
        text: 'Mısra Çok Mutlu :)',
        type: NotificationType.Customer,
        isToggled: false
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Mısra Şov Yaptı!',
        text: 'Mısra Şov Yaptı!',
        type: NotificationType.Coworker,
        isToggled: false
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Mısra Şov Yaptı!',
        text:
          'Mısra Çok Mutlu :) Baya iyi fazla mutlu, aousgodsufosudfhoıdshoıdsf, afdoguhdofsıughıpofd \n ausgdsaud',
        type: NotificationType.Customer,
        isToggled: false
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Mısra Şov Yaptı!',
        text: 'Mısra Şov Yaptı!',
        type: NotificationType.Supervisor,
        isToggled: false
      },
      {
        date: new Date(),
        image: 'https://i1.sndcdn.com/avatars-000045137497-nsoqu4-t500x500.jpg',
        title: 'Mısra Şov Yaptı!',
        text: 'Mısra Çok Mutlu :)',
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
    console.log(uiNotification);
  }
}

class UINotification extends Notification {
  isToggled = false;
}
