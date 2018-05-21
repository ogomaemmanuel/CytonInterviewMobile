import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiveRidePage } from './give-ride';

@NgModule({
  declarations: [
    GiveRidePage,
  ],
  imports: [
    IonicPageModule.forChild(GiveRidePage),
  ],
})
export class GiveRidePageModule {}
