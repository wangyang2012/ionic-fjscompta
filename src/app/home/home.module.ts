import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {Tab2PageModule} from '../tab2/tab2.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2PageModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
