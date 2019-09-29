import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmotionPage } from './emotion.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [EmotionPage],
  exports: [EmotionPage]
})
export class EmotionPageModule {}
