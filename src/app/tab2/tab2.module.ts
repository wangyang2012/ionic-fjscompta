import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab2Page} from './tab2.page';

import {Tab2PageRoutingModule} from './tab2-routing.module';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page],
  providers: [InAppBrowser],
  exports: [Tab2Page]
})
export class Tab2PageModule {}
