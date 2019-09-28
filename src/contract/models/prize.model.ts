import { Quest } from './quest.model';

export class Prize {
  title: string;
  detail: string;
  price: number;
  image: string;
  quests?: Quest[];
}
