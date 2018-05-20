import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingRidesPage } from './upcoming-rides';

@NgModule({
  declarations: [
    UpcomingRidesPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingRidesPage),
  ],
})
export class UpcomingRidesPageModule {}
