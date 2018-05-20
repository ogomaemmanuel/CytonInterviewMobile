import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastRidesPage } from './past-rides';

@NgModule({
  declarations: [
    PastRidesPage,
  ],
  imports: [
    IonicPageModule.forChild(PastRidesPage),
  ],
})
export class PastRidesPageModule {}
