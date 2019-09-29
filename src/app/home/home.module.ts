import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { EmotionPage } from '../emotion/emotion.page';
import { EmotionPageModule } from '../emotion/emotion.module';
import { TrainingPageModule } from '../training/training.module';
import { TrainingPage } from '../training/training.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    EmotionPageModule,
    TrainingPageModule
  ],
  entryComponents: [EmotionPage, TrainingPage],
  declarations: [HomePage]
})
export class HomePageModule {}
