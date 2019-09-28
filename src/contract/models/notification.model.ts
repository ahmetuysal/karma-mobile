import { NotificationType } from '../enums/notification-type.enum';

export class Notification {
  type: NotificationType;
  date: Date;
  title: string;
  text: string;
  image: string;
}
