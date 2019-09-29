import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JourneyPage } from './journey.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [JourneyPage],
  exports: [JourneyPage]
})
export class JourneyPageModule {}
