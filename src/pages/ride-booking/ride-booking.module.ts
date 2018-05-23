import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RideBookingPage } from './ride-booking';

@NgModule({
  declarations: [
    RideBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(RideBookingPage),
  ],
})
export class RideBookingPageModule {}
